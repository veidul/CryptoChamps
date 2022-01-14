const router = require("express").Router();

const userRoutes = require("./userRoutes");
const tourneyRoutes = require("./tourneyRoutes");
const walletRoutes = require("./walletRoutes");

router.use("/users", userRoutes);
router.use("/tourney", tourneyRoutes);
router.use("/wallet", walletRoutes);

module.exports = router;
