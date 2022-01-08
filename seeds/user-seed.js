const { User } = require('../models');

const userData = [
    {
        name: "johndoe",
        email: "johndoe@gmail.com",
        password: "cryptochampion"
    },
    {
        name: "marksmith",
        email: "marksmith@gmail.com",
        password: "crpytobeast"
    }
]

const seedCrypto = () => {
    Coin.bulkCreate(userData);
}

module.exports = seedCrypto;

