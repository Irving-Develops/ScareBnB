'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user3@user.io',
        username: 'best_host',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user4@user.io',
        username: 'Jason13',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user5@user.io',
        username: 'kFreddy',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user6@user.io',
        username: 'michaelMyersWasHere',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user7@user.io',
        username: 'la llorona',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user8@user.io',
        username: 'goodguychucky',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user9@user.io',
        username: 'jeepersCreepers',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user10@user.io',
        username: 'Pazuzu666',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user11@user.io',
        username: 'Time2Float',
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};