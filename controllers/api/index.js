const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes')
const testRoutes = require('./testRoutes')
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/tests', testRoutes);
router.use('/comments', commentRoutes);
module.exports = router;
