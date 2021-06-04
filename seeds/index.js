const sequelize = require('../config/connection')
const {seedUsers} = require('./userData');
const {seedPosts} = require('./postData');

const seedDb = async() => {
    await sequelize.sync({force:true});
    await seedUsers();
    await seedPosts();
    process.exit(0);
}

seedDb();