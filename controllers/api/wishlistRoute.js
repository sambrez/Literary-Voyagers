const router = require('express').Router();
const { User } = require('../../models');
const { Books } = require('../../models');
const { Wishlist } = require('../../models');
const { sendEmail } = require('../../utils/sendEmail');

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
router.get('/', async (req, res) => {
    try {
      const userId = req.session.user_id;
  
      // Retrieve the user's wishlist
      const userWishlist = await Wishlist.findAll({
        where: { userId },
        include: [{ model: Books, attributes: ['id', 'title', 'genre', 'author'] }],
      });
  
      res.json(userWishlist);
    } catch (error) {
      console.error('Error retrieving wishlist:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;