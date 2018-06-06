const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Routes to retrieve all articles and to post a new saved article to the db
router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);

// Route to remove specific saved article
router.route("/:id")
  .delete(dataController.remove);

module.exports = router;