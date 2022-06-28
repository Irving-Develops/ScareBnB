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
spotId: 1,
userId:1,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 2,
userId:2,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 3,
userId:3,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 4,
userId:4,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 5,
userId:5,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 6,
userId:6,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 7,
userId:7,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 8,
userId:8,
startDate: '2022-07-01',
endDate: '2022-07-06',
       createdAt: new Date(),
       updatedAt: new Date()
},
{
spotId: 9,
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
