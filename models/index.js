const User = require('./User');
const Tourney = require('./Tourney');
const Wallet = require('./Wallet');
const Coins = require('./coins');


User.hasMany(Wallet, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});
Tourney.hasMany(Wallet, {
    foreignKey: 'tourney_id'
});
Wallet.belongsTo(User, {
    foreignKey: 'user_id'
});
Wallet.belongsTo(Tourney, {
    foreignKey: 'tourney_id'
});
Wallet.hasMany(Coins, {
    foreignKey: 'wallet_id'
})
Coins.belongsTo(Wallet, {
    foreignKey: 'wallet_id'
})
Tourney.belongsToMany(User, {
    through: 'Tourney_User'
  });
  
  User.belongsToMany(Tourney, {
    through: 'Tourney_User'
  });
module.exports = { User, Tourney, Wallet, Coins };
