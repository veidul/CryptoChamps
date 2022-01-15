const router = require("express").Router();
const userRoutes = require("./userRoutes");
const tourneyRoutes = require("./tourneyRoutes")


router.use('/users', userRoutes);
router.use('/tournament', tourneyRoutes);


module.exports = router;
