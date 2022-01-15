const { Tourney } = require('../models');

const tourneyData = [
    {
        startTime: "2022-02-13 10:30:00",
        finishTime: "2022-02-20 10:30:00"
    },
    {
        startTime: "2022-02-22 10:30:00",
        finishTime: "2022-01-28 10:30:00"
    },
    {
        startTime: "2022-01-16 10:30:00",
        finishTime: "2022-01-22 10:30:00"
    },
    {
        startTime: "2022-01-23 10:30:00",
        finishTime: "2022-01-29 10:30:00"
    },
    {
        startTime: "2022-01-20 10:30:00",
        finishTime: "2022-02-5 10:30:00"
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

