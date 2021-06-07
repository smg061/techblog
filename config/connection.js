const Sequelize = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.js')[env];

let sequelize;
if (process.env.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
}

else {
    sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}
module.exports = sequelize;
