const router = require("express").Router();
const dataController = require("../../controllers/dataController");


router.route("/")
  .get(dataController.findAll)
  .post(dataController.create);
  
  router.route("/:userfirstname")  
  .put(dataController.update);


router.route("/:usernm")
  .get(dataController.getUser);
 


router.route("/:zip/:treat")  
.get(dataController.findByZip);

router.route("/:peanut/:yeso/:treat")
.get(dataController.findByPeanut);

// router.route("/:yesh/:healthyzip/:treats")
// .get(dataController.findByHealthy);




module.exports = router;