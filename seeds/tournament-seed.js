const { Tourney } = require('../models');

const tourneyData = [
    {
        startTime: "2022-01-16 10:30:00",
        finishTime: "2022-01-17 10:30:00"
    },
    {
        startTime: "2022-01-16 10:30:00",
        finishTime: "2022-01-17 10:30:00"
    },
    {
        startTime: "2022-01-16 10:30:00",
        finishTime: "2022-01-17 10:30:00"
    },
    {
        startTime: "2022-01-16 10:30:00",
        finishTime: "2022-01-17 10:30:00"
    },
    {
        startTime: "2022-01-16 10:30:00",
        finishTime: "2022-01-17 10:30:00"
    },
    {
        startTime: new Date(Date.now() + 3600000*24),
        finishTime: "2022-01-17 10:30:00"
    },

]

const seedTourney = async () => {
    await Tourney.bulkCreate(tourneyData);
}

module.exports = seedTourney;

