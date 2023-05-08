'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('VanAmenities', [
    {
     vanId: 1,
     amenityId: 1,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 2,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 3,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 4,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 5,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 6,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 7,
         createdAt: new Date(),
    updatedAt: new Date()
   },
    {
     vanId: 1,
     amenityId: 8,
         createdAt: new Date(),
    updatedAt: new Date()
   },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('VanAmenities', null, {});
  }
};
