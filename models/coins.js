const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Coins extends Model { }

Coins.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    img: {
        type: DataTypes.STRING,
        allowNUll: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ticker: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    walletId: {
        type: DataTypes.INTEGER,
        references: {
            model: "wallet",
            key: "id",
        },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "coins",
    })
module.exports = Coins;
