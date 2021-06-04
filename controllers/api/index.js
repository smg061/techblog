const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes')
const testRoutes = require('./testRoutes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/tests', testRoutes);

module.exports = router;
