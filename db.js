const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URI);

sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to PostgreSQL using Sequelize');
  })
  .catch(err => {
    console.error('PostgreSQL connection error:', err.message);
    console.error('Full error:', err);
    process.exit(1);
});

module.exports = sequelize;