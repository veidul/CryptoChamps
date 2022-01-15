const seedUser = require('./user-seed');
const seedCoins = require('./coins-seed');
const seedTourney = require('./tournament-seed')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  await seedCoins();
  console.log('\n----- COINS SEEDED -----\n');
  await seedTourney();
  console.log('\n----- TOURNEY SEEDED -----\n');

  process.exit(0);
};

module.exports = seedAll;

