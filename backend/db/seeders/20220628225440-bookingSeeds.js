'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
{
vanId: 1,
userId:1,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 2,
userId:2,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 3,
userId:3,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 4,
userId:4,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 5,
userId:5,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 6,
userId:6,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 7,
userId:7,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 8,
userId:8,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 9,
userId:9,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
