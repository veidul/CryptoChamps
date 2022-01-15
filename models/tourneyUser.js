const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class TourneyUser extends Model {}

TourneyUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    finishTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wallet: DataTypes.TEXT,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    tourney_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tourney",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tourney_user",
  }
);

module.exports = TourneyUser;
