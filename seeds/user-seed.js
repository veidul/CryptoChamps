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
    },
    {
        name: "ludie",
        email: "ludiefletcher@aol.com",
        password: "rootroot"
    }
]

const seedUser = async () => {
    await User.create(userData[0]);
    await User.create(userData[1]);
    await User.create(userData[2]);
}

module.exports = seedUser;

