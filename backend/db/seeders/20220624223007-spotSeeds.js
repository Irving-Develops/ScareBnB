'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
  { 
    userId: 1,
    address: "1120 Westchester Pl",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    name: "The Murder House",
    price: 499.99,
    history: 'German-American architect Alfred Rosenheim built the house in 1902, and after a five year construction, used it as his own residence. The house is sited on a sloping tree-studded 3/4 acre lot at 1120 Westchester Place in Country Club Park. The surrounding neighborhood was known as "Billionaire Row" in 1908, with some of the wealthiest families in California residing there. Over 30 people have reportedly died in the house, their angry souls trapped forever within its walls. Is is believed to have been haunted since the 1920s'
  },
  { 
    userId: 2,
    address: "1126 Queens Hwy",
    city: "Long Beach",
    state: "California",
    country: "United States",
    name: "The Queen Mary",
    price: 649.99,
    history: 'Queen Mary has been dubbed “One of the Top Ten Most Haunted Places on Earth” by Time Magazine.  As soon as you set foot aboard this once-glorious ship, you can feel that something’s just not quite right. Home to The White Lady, Little Jackie, John Henry, Grumpy, Captain Treasure Jones, John Peddar and Dana'
  },
  { 
    userId: 3,
    address: "8 Potters Pond",
    city: "Wotton-under-Edge",
    state: "Gloucestershire",
    country: "England",
    name: "Ancient Ram Inn",
    price: 100.00,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  { 
    userId: ,
    address: ,
    city: ,
    state: ,
    country: ,
    name: ,
    price: ,
  },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
