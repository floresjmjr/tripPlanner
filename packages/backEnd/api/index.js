const router = require("express").Router();

router.use("/", require("./home"));
router.use("/itinerary", require("./itinerary"));
router.use("/itineraries", require("./itineraries"));
router.use("/", require("./flight"));
router.use("/", require("./lodging"));
router.use("/", require("./budget"));
router.use("/", require("./eat"));

module.exports = router;
