const router = require('express').Router();
const { User } = require('../../models');
const { Books } = require('../../models');
const { Wishlist } = require('../../models');
const { sendEmail } = require('../../utils/sendEmail');
const withAuth = require("../../utils/auth");

// POST to Wishlist
router.post('/add', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const { book_id, genre, author, bookTitle } = req.body;

    const existingWishlistItem = await Wishlist.findOne({
      where: { userId, book_id },
    });

    if (existingWishlistItem) {
      return res.status(400).json({ message: 'Book is already in the wishlist' });
    }

    await Wishlist.create({ userId, book_id, title: bookTitle, author, genre });

    res.json({ success: true, message: 'Book added to wishlist successfully' });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// GET Wishlist
router.get('/wishlist', withAuth, async (req, res) => {
  try {
    console.log('Entered /wishlist route'); // Log that the route is entered
    console.log('User ID:', req.session.user_id); // Log user_id

    const userWishlist = await Wishlist.findAll({
      where: { user_id: req.session.user_id },
      include: [
        {
          model: Books,
          attributes: ['id', 'title', 'genre', 'author'],
        },
      ],
    });

    const wishlist = userWishlist.map((item) => item.get({ plain: true }));
    console.log('Wishlist Data:', wishlist); // Log wishlist data

    res.render('wishlist', {
      wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error('Error retrieving wishlist:', error);
    res.status(500).render('error', { error }); // Render an error page
  }
});

module.exports = router;