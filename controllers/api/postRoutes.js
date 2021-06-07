const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        { model: User, attributes: ["name", "email", "id"] },
        { model: Comment },
      ],
    });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["name", "email", "id"] },
        { model: Comment },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let newPost;
    if (req.session.logged_in) {
      newPost = await Post.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.session.user_id,
      });
    } else {
      newPost = await Post.create(req.body);
    }
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
