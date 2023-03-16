'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Amenities', [
     { 
      name: "Hair Dryer",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Shampoo",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Hot Water",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Free Washer",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Free Dryer",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Bed Linens",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Extra Blankets",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Iron",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Fireplace",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Security Cameras",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "First Aid Kit",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Fire Extinguisher",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Wifi",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Refrigerator",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Cooking Basics",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Dishes and Silverware",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Stove",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Coffee Maker",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Pets Allowed",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "TV",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Stove",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Oven",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Parking",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Self Check-In",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Hangers",
          createdAt: new Date(),
    updatedAt: new Date()
   },
     { 
      name: "Microwave",
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
   return queryInterface.bulkDelete('Amenities', null, {});
  }
};
