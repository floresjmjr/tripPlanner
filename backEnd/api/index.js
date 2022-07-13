const router = require("express").Router();

router.use("/", require("./home"));
router.use("/", require("./tripDetails"));
router.use("/", require("./flights"));
router.use("/", require("./lodging"));
router.use("/", require("./budget"));
router.use("/", require("./eat"));

module.exports = router;
