const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
   try {
      const allComments = await Comment.findAll({
         include: [{ model: User, attributes: ["name", "email", "id"] }, { model: Post }],
      });
      res.status(200).json(allComments);
   } catch (err) {
      res.status(500).json(err);
   }
});

router.get("/:id", async (req, res) => {
   try {
      const commentData = await Comment.findByPk(req.params.id, {
         include: [{ model: User, attributes: ["name", "email", "id"] }, { model: Post }],
      });
      res.status(200).json(commentData);
   } catch (err) {
      res.status(500).json(err);
   }
});

router.post("/", async (req, res) => {
   try {
      let newComment;
      if (req.session.logged_in) {
         newComment = await Comment.create({
            post_id: req.body.current_post_id,
            body: req.body.body,
            user_id: req.session.user_id,
         });
      } else {
         newComment = await Comment.create(req.body);
      }
      res.status(200).json(newComment);
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = router;
