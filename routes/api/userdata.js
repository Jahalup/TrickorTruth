const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Routes to retrieve all articles and to post a new saved article to the db
router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);

// Route to remove specific saved article
router.route("/:usernm")
  .get(dataController.getUser);

router.route("/:zip/:treat")  
.get(dataController.findByZip);

router.route("/:peanut/:yeso/:treat")
.get(dataController.findByPeanut);

// router.route("/:yesh/:healthyzip/:treats")
// .get(dataController.findByHealthy);




module.exports = router;