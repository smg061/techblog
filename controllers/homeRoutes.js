const router = require('express').Router();
const { User, Post } = require('../models');

// render all posts
router.get('/' , async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
          {
              model: User,
              attributes: ['name', 'email']
          }
      ],
      raw:true,
    })
    console.log(allPosts);
    res.render('homepage', {
      allPosts,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Prevent non logged in users from viewing the homepage
router.get('/users' , async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
