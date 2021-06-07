const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
  process.env.JAWS_DB_NAME,
  process.env.JAWS_DB_USER,
  process.env.JAWS_DB_PASSWORD,
  {
    host: process.env.JAWS_DB_HOST,
    dialect: 'mysql',
    port: 3306
  }

);


// else {
//   const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,p
//     }
//   );
// }
module.exports = sequelize;
