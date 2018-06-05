const router = require("express").Router();
const dataRoutes = require("./userdata");

router.use("/userentered", dataRoutes);
module.exports = router;