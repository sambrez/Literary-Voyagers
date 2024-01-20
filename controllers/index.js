const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepageRoute');
const profileRoutes = require('./profileRoute');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);

module.exports = router;