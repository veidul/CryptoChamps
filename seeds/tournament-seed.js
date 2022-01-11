const { User } = require('../models');

const tourneyData = [
    {
        startTime: ,
        finishTime: 
    },
    {
        startTime: ,
        finishTime: 
    }
]

const seedTourney = async () => {
    await User.createAll(tourneyData);
}

module.exports = seedTourney;

