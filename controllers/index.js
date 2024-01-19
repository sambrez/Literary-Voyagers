const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./UserRoutes');
// To be renamed with updated controller files
const projectRoutes = require('.projectRoutes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
// To be renamed with updated controller files
router.use('/projects', projectRoutes);

module.exports = router;
