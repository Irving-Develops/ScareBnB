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
          name: "Ponderosa",
          make: "Ram",
          model: "Promaster",
          year: 2017,
          location: "416 Hamilton Blvd, Peoria, IL 61602",
          description:
            "Ponderosa is a stylish adventure van with a warm and inviting aesthetic. The handcrafted Colorado beetle kill pine cabinetry gives this beauty a true one-of-a-kind feel.  The layout offers the essentials for life on the road, without cluttering the living space. The kitchenette is fitted with a flip up countertop extension for prep space when you need it, and flexible space for storage when you don’t.",
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
          make: "Ram",
          model: "Promaster",
          year: 2020,
          location: "188 W Grand Ave, Elmhurst, IL 60126",
          description:
            "With a modern, log cabin interior and a waterproof rooftop tent, this baby has all-weather sleeping quarters for four. This low profile, easy-to-drive van seats four and comes with all the camp cooking essentials.",
          price: 250,
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
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          name: "The Prairie Rover",
          make: "Ram",
          model: "Promaster",
          year: 2018,
          location: "456 Lake Shore Dr, Chicago, IL 60611",
          description:
            "The Prairie Rover features a fridge, freezer, sink, and 2 burner stove, so you can level up your camp cooking. In addition to a complete, dine-in kitchen, this fully loaded campervan has a queen memory foam mattress and bedding for two.",
          price: 199,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          name: "The Windy City Cruiser",
          make: "Ram",
          model: "Promaster City",
          year: 2018,
          location: "789 Elm St, Evanston, IL 60201",
          description:
            "The Windy City Cruiser packs tons of functionality into a compact, easy to park, converted cargo van. It’s going to feel like driving a car or SUV, but when you open it up, BAM! Everything you need to cook, sleep, and kick back is right there in the innovative drawer system. Keep your gear organized and out of the way, and relax on the full size memory foam mattress.",
          price: 125,
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
