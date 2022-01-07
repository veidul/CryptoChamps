const { Model, DataTypes,} = require('sequelize');
const sequelize = require('../config/connection');
class Tourney extends Model { }

Tourney.init({
    id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
    },
    players: {
        ref player id
    }
    wallets: {
        references wallet
    }
    startTime: {

    }
    finishTime: {
        
    }


    // need to talk to partners to finish these
})

module.exports = Tourney;