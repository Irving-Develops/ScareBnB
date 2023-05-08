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
bookerId:9,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 2,
bookerId:8,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 3,
bookerId:7,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 4,
bookerId:6,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 5,
bookerId:4,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 6,
bookerId:5,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 7,
bookerId:3,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 8,
bookerId:2,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
vanId: 9,
bookerId:1,
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
