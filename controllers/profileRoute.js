const router = require("express").Router();
const { Books, User, Reviews, Wishlist } = require('../models');
const withAuth = require('../utils/auth');

// GET for user's profile page - displays books user has posted
router.get('/', withAuth, async (req, res) => {
    
    try {
        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Books, Wishlist }],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('profile', {
          ...user,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

// GET for page for user to add a new book
router.get("/search_book", (req, res) => {
  res.render("newBook");
});

module.exports = router;