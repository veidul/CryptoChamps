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
    coinName: { BTC

    },
    purchasePrice: { 47895

    },
    quantity:{ 1

    },
    bank:{ 
        defaultValue: 25000

    },
    userId:{

    },
    tourney:{
        
    }
    // need to talk to partners to finish these
})
module.exports = Wallet;