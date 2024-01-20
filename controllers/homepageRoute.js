const router = require("express").Router();
const { Books, Reviews, User } = require("../models");
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
    const oneBook = await Post.findOne({
      where: { id: req.params.id },
      attributes: ["title", "author", "genre"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Reviews,
          attributes: ["reviewTitle", "review", "date_created", "recommendation", "user_id"],
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

// for login and sign up
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  } else {
    res.render("login");
  }
});

module.exports = router;
