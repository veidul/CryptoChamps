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

const seedUser = () => {
    User.bulkCreate(userData);
}

module.exports = seedUser;

