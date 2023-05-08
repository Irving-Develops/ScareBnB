'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        email: 'demo@user.io',
        username: 'user1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@user.io',
        username: 'user2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user3@user.io',
        username: 'user3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user4@user.io',
        username: 'user4',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user5@user.io',
        username: 'user5',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user6@user.io',
        username: 'user6',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user7@user.io',
        username: 'user7',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user8@user.io',
        username: 'user8',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user9@user.io',
        username: 'user9',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'user10@user.io',
        username: 'user10',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user11@user.io',
        username: 'user11',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user12@user.io',
        username: 'user12',
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "user1",
            "user2",
            "user3",
            "user4",
            "user5",
            "user6",
            "user7",
            "user8",
            "user9",
            "user10",
            "user11",
            "user12",
          ],
        },
      },
      {}
    );
  }
};