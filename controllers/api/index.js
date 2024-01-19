const router = require('express').Router();
const userRoutes = require('./UserRoutes');
const bookRoutes = require('./booksRoute');
const reviewRoutes = require('./reviewsRoute');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;