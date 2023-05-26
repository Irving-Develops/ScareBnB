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
          url: "https://cdn-icons-png.flaticon.com/512/10288/10288268.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Heating",
          url: "https://cdn-icons-png.flaticon.com/128/4112/4112130.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Refrigerator",
          url: "https://cdn-icons-png.flaticon.com/512/3141/3141426.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stove",
          url: "https://cdn-icons-png.flaticon.com/512/4324/4324523.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sink",
          url: "https://cdn-icons-png.flaticon.com/128/2425/2425747.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microwave",
          url: "https://cdn-icons-png.flaticon.com/512/7942/7942676.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toaster",
          url: "https://cdn-icons-png.flaticon.com/512/3254/3254192.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coffee maker",
          url: "https://cdn-icons-png.flaticon.com/512/2012/2012983.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kettle",
          url: "https://cdn-icons-png.flaticon.com/512/4324/4324516.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Utensils",
          url: "https://cdn-icons-png.flaticon.com/128/5621/5621934.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plates and bowls",
          url: "https://cdn-icons-png.flaticon.com/512/2331/2331075.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cups and glasses",
          url: "https://cdn-icons-png.flaticon.com/512/1356/1356876.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cutting board",
          url: "https://cdn-icons-png.flaticon.com/512/4288/4288439.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Knives",
          url: "https://cdn-icons-png.flaticon.com/512/5499/5499687.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pots and pans",
          url: "https://cdn-icons-png.flaticon.com/512/1356/1356888.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bedding",
          url: "https://cdn-icons-png.flaticon.com/512/2963/2963750.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pillows",
          url: "https://cdn-icons-png.flaticon.com/512/3821/3821955.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Towels",
          url: "https://cdn-icons-png.flaticon.com/512/804/804272.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soap",
          url: "https://cdn-icons-png.flaticon.com/512/2913/2913409.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shampoo and Conditioner",
          url: "https://cdn-icons-png.flaticon.com/512/2553/2553628.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hair dryer",
          url: "https://cdn-icons-png.flaticon.com/512/3144/3144969.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toilet",
          url: "https://cdn-icons-png.flaticon.com/512/900/900688.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shower",
          url: "https://cdn-icons-png.flaticon.com/512/2425/2425844.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Water tank",
          url: "https://cdn-icons-png.flaticon.com/512/3374/3374661.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Propane tank",
          url: "https://cdn-icons-png.flaticon.com/512/8804/8804829.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Solar panels",
          url: "https://cdn-icons-png.flaticon.com/512/5546/5546454.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Generator",
          url: "https://cdn-icons-png.flaticon.com/512/8098/8098836.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Awning",
          url: "https://cdn-icons-png.flaticon.com/512/8221/8221123.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chairs",
          url: "https://cdn-icons-png.flaticon.com/512/8844/8844135.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Table",
          url: "https://cdn-icons-png.flaticon.com/512/3816/3816217.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "First aid kit",
          url: "https://cdn-icons-png.flaticon.com/512/3076/3076780.png",
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
