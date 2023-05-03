"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Vans",
      [
        {
          userId: 1,
          name: "Prairie Rover",
          make: "Ford",
          model: "Transit",
          year: 2020,
          location: "1234 W Randolph St, Chicago, IL 60606",
          description:
            "Prairie Rover is a luxury family van with a lot style. This extended Transit features a beetle kill pine tongue & groove ceiling, palm countertops, leather drawer pulls, upholstered wall panels, and seating for four. We love the ample storage and the open feel of this layout!",
          price: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Luxury Cruiser",
          make: "Mercedes-Benz",
          model: "Sprinter",
          year: 2020,
          location: "1603 Orrington Ave, Evanston, IL 60201",
          description:
            "This luxurious van is perfect for those who want to travel in style. It has a full kitchen, bathroom, and a comfortable bed.",
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Rugged Explorer",
          make: "Ram",
          model: "Promaster",
          year: 2017,
          location: "416 Hamilton Blvd, Peoria, IL 61602",
          description:
            "This rugged van is perfect for those who love the great outdoors. It has a comfortable bed, a kitchenette, and plenty of storage space for your gear.",
          price: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          name: "Cozy Camper",
          make: "Mercedes",
          model: "Sprinter",
          year: 2022,
          location: "101 S Madison St, Bloomington, IL 61701",
          description:
            "This cozy van is perfect for a romantic getaway. It has a comfortable bed, a kitchenette, and a romantic ambience.",
          price: 130,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          name: "Adventurer's Dream",
          make: "Mercedes",
          model: "Sprinter",
          year: 2016,
          location: "50 Highway 145 S, Harrisburg, IL 62946",
          description:
            "This van is perfect for adventurers looking for a comfortable and convenient way to travel. It has a queen-sized bed, a kitchenette, and plenty of storage space.",
          price: 140,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          name: "Family Cruiser",
          make: "Dodge",
          model: "Grand Caravan",
          year: 2022,
          location: "188 W Grand Ave, Elmhurst, IL 60126",
          description:
            "This van is perfect for families looking for a comfortable and convenient way to travel. It has a queen-sized bed, a kitchenette, and a child-friendly interior.",
          price: 160,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          name: "Vintage Explorer",
          make: "Volkswagen",
          model: "Bus",
          year: 1972,
          location: "123 Main St, Urbana, IL 61801",
          description:
            "This vintage van is perfect for those who want to travel back in time. It has a comfortable bed, a retro interior, and plenty of charm.",
          price: 180,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          name: "The Prairie Rover",
          make: "Ford",
          model: "Econoline",
          year: 2016,
          location: "456 Lake Shore Dr, Chicago, IL 60611",
          description:
            "This beautifully converted van is perfect for those who want to explore the Midwest. With a comfortable queen bed, a kitchenette, and plenty of storage, it has everything you need for an unforgettable adventure.",
          price: 125,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          name: "The Windy City Cruiser",
          make: "Mercedes-Benz",
          model: "Sprinter",
          year: 2018,
          location: "789 Elm St, Evanston, IL 60201",
          description:
            "Experience the ultimate luxury with this sleek and modern Sprinter van. Equipped with a full kitchen, a luxurious queen bed, and a bathroom, it's the perfect home on wheels for your next road trip.",
          price: 275,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Vans", null, {});
  },
};
