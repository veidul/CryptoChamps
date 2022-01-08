const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Coins extends Model {}

Coins.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
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
    wallet: {
        type: DataTypes.INTEGER,
        references: {
          model: "wallet",
          key: "id",
        },
    },
},
{
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "coins",
    },)
module.exports = Coins;
