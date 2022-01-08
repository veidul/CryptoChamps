const User = require('./User');
const Tourney = require('./Tourney');
const Wallet = require('./Wallet');
const Coins = require('./coins');

User.hasMany(Tourney, {
    foreignKey: 'user_id'
});
User.hasMany(Wallet, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});
Tourney.hasMany(User,{
    foreignKey: 'user_id'
});
Tourney.hasMany(Wallet, {
    foreignKey: 'tourney_id'
});
Wallet.hasMany(Coins, {
    foreignKey: 'wallet_id'
})
Coins.BelongsTo(Wallet, {
    foreignKey: 'wallet_id'
})
Wallet.belongsTo(User, {
    foreignKey: 'user_id'
});
Wallet.belongsTo(Tourney, {
    foreignKey: 'tourney_id'
});

module.exports = { User, Tourney, Wallet };
