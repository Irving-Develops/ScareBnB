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
      name: "Hair Dryer"
   },
     { 
      name: "Shampoo"
   },
     { 
      name: "Hot Water"
   },
     { 
      name: "Free Washer"
   },
     { 
      name: "Free Dryer"
   },
     { 
      name: "Bed Linens"
   },
     { 
      name: "Extra Blankets"
   },
     { 
      name: "Iron"
   },
     { 
      name: "Fireplace"
   },
     { 
      name: "Security Cameras"
   },
     { 
      name: "First Aid Kit"
   },
     { 
      name: "Fire Extinguisher"
   },
     { 
      name: "Wifi"
   },
     { 
      name: "Refrigerator"
   },
     { 
      name: "Cooking Basics"
   },
     { 
      name: "Dishes and Silverware"
   },
     { 
      name: "Stove"
   },
     { 
      name: "Coffee Maker"
   },
     { 
      name: "Pets Allowed"
   },
     { 
      name: "TV"
   },
     { 
      name: "Stove"
   },
     { 
      name: "Oven"
   },
     { 
      name: "Parking"
   },
     { 
      name: "Self Check-In"
   },
     { 
      name: "Hangers"
   },
     { 
      name: "Microwave"
   },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
