const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use((req, res) => {
  res.send("<h1> Wrong route! </h1>");
});
module.exports = router;
