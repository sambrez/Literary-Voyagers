const router = require('express').Router();
const { User } = require('../../models');
const { Books } = require('../../models');
const { Wishlist } = require('../../models');
const { sendEmail } = require('../../utils/sendEmail');

// POST to Wishlist
router.post('/add', async (req, res) => {
    try {
      const userId = req.session.user_id;
  
      const { bookId, bookTitle } = req.body;
  
      // Check if the book is already in the user's wishlist
      const existingWishlistItem = await Wishlist.findOne({
        where: { userId, bookId },
      });
  
      if (existingWishlistItem) {
        return res.status(400).json({ message: 'Book is already in the wishlist' });
      }
  
      // Create a new Wishlist record
      await Wishlist.create({ userId, bookId });
  
      // Send an email to the user 
      const userEmail = req.currentUser.email;
      sendEmail(userEmail, 'Book Added to Wishlist', `You added "${bookTitle}" to your wishlist!`);
  
      res.json({ message: 'Book added to wishlist successfully' });
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
        include: [{ model: Books, attributes: ['id', 'title', 'genre'] }],
      });
  
      res.json(userWishlist);
    } catch (error) {
      console.error('Error retrieving wishlist:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;