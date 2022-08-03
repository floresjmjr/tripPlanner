const { Sequelize } = require('sequelize');
require('dotenv').config()

const db = new Sequelize(`postgres://${process.env.USERNAME}:${process.env.DB_PASSWORD}@raja.db.elephantsql.com/${process.env.DATABASE}`);

const connection = async () => {
  try {
    await db.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connection();

module.exports = db;
