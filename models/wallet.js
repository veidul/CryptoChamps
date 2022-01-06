const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../config/connection');
class Wallet extends Model { }

Wallet.init({
    id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
    },
    // need to talk to partners to finish these
})
module.exports = Wallet;