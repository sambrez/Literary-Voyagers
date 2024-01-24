const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const bookRoutes = require('./booksRoute');
const reviewRoutes = require('./reviewsRoute');
const wishlistRoutes = require('./wishlistRoute')

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/reviews', reviewRoutes);
router.use('/wishlist', wishlistRoutes);


module.exports = router;