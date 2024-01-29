const router = require("express").Router();
const { Books, Reviews, User, Wishlist } = require("../models");
const withAuth = require("../utils/auth");

// GET for all books posted by all users
router.get("/", async (req, res) => {
  try {
    const allBooks = await Books.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Reviews,
          include: [
            {
              model: User,
              attributes: ["name"]
            }
          ]
        },
      ],
    });

    const books = allBooks.map((book) => book.get({ plain: true }));

    res.render("homepage", {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for single book including associated reviews
router.get("/books/:id", withAuth, async (req, res) => {
  try {
    const oneBook = await Books.findOne({
      where: { id: req.params.id },
      attributes: ["title", "author", "genre", "recommendation", "review", "user_id"],
      include: [
        {
          model: User
        },
        {
          model: Reviews
        },
      ],
    });

    if (oneBook) {
      const book = oneBook.get({ plain: true });
      res.render("book", {
        book,
        logged_in: req.session.logged_in,
      });
    } else {
      res.status(400).json({ message: "Book not found." });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/wishlist', withAuth, async (req, res) => {
  try {


    // Retrieve the user's wishlist including associated books
    const userWishlist = await Wishlist.findAll({
      where: { userId: req.session.user_id },
      include: [
        {
          model: Books,
          attributes: ['id', 'title', 'genre', 'author'],
        },
      ],
    });

    const wishlist = userWishlist.map((item) => item.get({ plain: true }));

    res.render('wishlist', {
      wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error('Error retrieving wishlist:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// for login and sign up
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  } else {
    res.render("login");
  }
});






module.exports = router;
