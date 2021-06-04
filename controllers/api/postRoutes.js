const router = require('express').Router();
const {User, Post} = require('../../models');

router.get('/', async(req, res) => {

    try {
        const allPosts = await Post.findAll({
            include: [
                {
                    model:User,
                    attributes: ['name', 'email', 'id']
                }]
        })
        res.status(200).json(allPosts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        res.status(200).json({message: "This route doesn't crash"});
    }
    catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;