const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// render all posts
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name", "email"],
        },
      ],
      raw: true,
    });
    console.log(allPosts);
    res.render("homepage", {
      allPosts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
      const post = await Post.findByPk(req.params.id, {
      include: [
        { model: Comment },
        { model: User, attributes: ["name", "email", "id"] },
      ],
      raw: true,
    });
    const comments = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [{ model: User, attributes: ["name", "email"] }],
      raw: true,
    });
    console.log(post)
    console.log(comments);
    res.render("post", {
      post,
      comments,
      logged_in: req.session.logged_in,
      // this lets us know if the post the user is viewing is by the same author that's logged in
      same_user : post['user.id'] == req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Prevent non logged in users from viewing the homepage
router.get("/users", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render("homepage", {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  // only render posts if user is logged_in
  const userPosts = await Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: [{ model: Comment }],
    raw: true,
  });
  res.render("dashboard", {
    userPosts,
    user_name: req.session.user_name,
    user_id: req.session.user_id,
  });
});

router.get('/post/:id/edit', async (req, res) => {
  res.render('editPost');
})


module.exports = router;
