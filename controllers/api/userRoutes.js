const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
   try {
      const userData = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
      });

      req.session.save(() => {
         req.session.logged_in = true;
         (req.session.user_name = userData.name), (req.session.user_id = userData.id);
         res.status(200).json(userData);
      });
   } catch (err) {
      console.log(err);
      res.status(500).json(err);
   }
});

// handle user logins
router.post("/login", async (req, res) => {
   try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({ where: { email: req.body.email } });

      if (!userData) {
         res.status(400).json({
            message: "Incorrect email or password, please try again",
         });
         return;
      }

      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);

      if (!validPassword) {
         res.status(400).json({
            message: "Incorrect email or password, please try again",
         });
         return;
      }
      // Create session variables based on the logged in user
      req.session.save(() => {
         req.session.user_id = userData.id;
         req.session.user_name = userData.name;
         req.session.logged_in = true;
         res.json({ user: userData, message: "You are now logged in!" });
      });
   } catch (err) {
      res.status(400).json(err);
   }
});

// handle logouts
router.post("/logout", (req, res) => {
   if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
         res.status(204).end();
      });
   } else {
      res.status(404).end();
   }
});

module.exports = router;
