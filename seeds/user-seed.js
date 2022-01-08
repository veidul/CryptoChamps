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

const seedUser = async () => {
    await User.create(userData[0]);
    await User.create(userData[1]);
}

module.exports = seedUser;

