const {User} = require('../models/');

const userData = [
    {
      "name": "Santos",
      "email": "Santos@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Lecubiscito",
      "email": "leucobiscito@gmail.com",
      "password": "password12345"
    },
    {
      "name": "PragueDemon",
      "email": "praguedemon@aol.com",
      "password": "password12345"
    },
    {
      "name": "Peter",
      "email": "jordanson@msn.com",
      "password": "password12345"
    },
    {
      "name": "Blaize",
      "email": "basrelief@yahoo.com",
      "password": "password12345"
    }
  ]

  const seedUsers = () => User.bulkCreate(userData, {
      individualHooks:true
  });

  module.exports = {seedUsers};