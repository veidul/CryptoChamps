const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Tourney extends Model {}

Tourney.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  finishTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
  // need to talk to partners to finish these
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tourney",
  }
);

module.exports = Tourney;
