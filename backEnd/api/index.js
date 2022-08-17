const router = require("express").Router();

router.use("/", require("./home"));
router.use("/trip", require("./trip"));
router.use("/", require("./flight"));
router.use("/", require("./lodging"));
router.use("/", require("./budget"));
router.use("/", require("./eat"));

module.exports = router;
