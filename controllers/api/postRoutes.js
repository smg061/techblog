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

router.put("/:id/edit", async (req, res) => {
    if (!req.body){
        console.log("no body!")
    }
  try {
    const updatedPost = await Post.update(req.body, {
      where: { post_id: req.params.id },
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { post_id: req.params.id },
    });
    res.status(200), json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
