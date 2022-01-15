const User = require("./User");
const Tourney = require("./Tourney");
const Wallet = require("./Wallet");
const Coins = require("./coins");
const TourneyUser = require("./tourneyUser");

User.hasMany(Wallet, {
  foreignKey: "user_id",
});
Tourney.hasMany(Wallet, {
  foreignKey: "tourney_id",
});
Wallet.belongsTo(User, {
  foreignKey: "user_id",
});
Wallet.belongsTo(Tourney, {
  foreignKey: "tourney_id",
});
Wallet.hasMany(Coins, {
  foreignKey: "wallet_id",
});
Coins.belongsTo(Wallet, {
  foreignKey: "wallet_id",
});
Tourney.belongsToMany(User, {
  through: "tourney_user",
  foreignKey: "tourney_id",
});

User.belongsToMany(Tourney, {
  through: "tourney_user",
  foreignKey: "user_id",
});
module.exports = { User, Tourney, Wallet, Coins, TourneyUser };
