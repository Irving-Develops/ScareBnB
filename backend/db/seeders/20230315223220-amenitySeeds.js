"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Amenities",
      [
        {
          name: "Air conditioning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heating",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Refrigerator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stove",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sink",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microwave",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toaster",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coffee maker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kettle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Utensils",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plates and bowls",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cups and glasses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cutting board",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Knives",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pots and pans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bedding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pillows",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Towels",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soap",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shampoo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Conditioner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hair dryer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toilet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shower",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Water tank",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Propane tank",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Solar panels",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Generator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Awning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chairs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Table",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "First aid kit",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Amenities", null, {});
  },
};
