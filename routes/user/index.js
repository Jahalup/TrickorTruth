const router = require("express").Router();
const dataRoutes = require("./user");

router.use("/user", dataRoutes);
module.exports = router;