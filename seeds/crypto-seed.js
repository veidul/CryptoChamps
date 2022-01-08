const { Crypto } = require('../models');

const cryptoData = {
    {
        name: "BTC",
        description: ""
    },
    {
        name: "",

    }

}

const seedCrypto = () => {
    Crypto.bulkCreate(cryptoData);
}

module.exports = seedCrypto;