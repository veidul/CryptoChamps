const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Wallet extends Model {}

Wallet.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchasePrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    bank: {
      type: DataTypes.DECIMAL,
      defaultValue: 25000,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    tourney: {
      type: DataTypes.INTEGER,
      references: {
        model: "tourney",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "wallet",
  }
  // need to talk to partners to finish these
);
module.exports = Wallet;
