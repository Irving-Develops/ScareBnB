"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        // Reviews for the Prairie Rover (vanId: 1)
        {
          review:
            "The Prairie Rover was a fantastic choice for our weekend getaway. The interior was beautifully designed, and the leather drawer pulls added a touch of luxury. The bed was comfortable, and the storage space was more than enough for our belongings. We highly recommend this van!",
          rating: 5,
          userId: 3,
          vanId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "We had a great experience with the Prairie Rover. The design was stylish and unique, and we loved the upholstered wall panels. The van was clean and well-maintained. The only minor drawback was that the kitchen area was a bit small. Overall, we would definitely rent it again!",
          rating: 4,
          userId: 4,
          vanId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for the Luxury Cruiser (vanId: 2)
        {
          review:
            "The Luxury Cruiser was absolutely amazing! It lived up to its name with its luxurious amenities and modern design. The full kitchen and bathroom were incredibly convenient, and the comfortable bed made for a great night's sleep. We highly recommend this van for a truly luxurious experience!",
          rating: 5,
          userId: 5,
          vanId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "The Luxury Cruiser was a comfortable and stylish choice. The van had all the necessary amenities for a comfortable trip, and we appreciated the attention to detail in the interior design. However, we found the price a bit high compared to similar options. Nonetheless, it was a great experience overall.",
          rating: 4,
          userId: 6,
          vanId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for the Rugged Explorer (vanId: 3)
        {
          review:
            "The Rugged Explorer was perfect for our outdoor adventure. The van was spacious, and the comfortable bed provided a good night's sleep after long hikes. The kitchenette was well-equipped, and the storage space easily accommodated our gear. Highly recommended for nature enthusiasts!",
          rating: 5,
          userId: 7,
          vanId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "We had a great time with the Rugged Explorer. The van was reliable, and the bed was comfortable. It had everything we needed for our camping trip. However, we noticed some minor issues with the plumbing in the kitchenette. Nonetheless, it was a good experience overall.",
          rating: 4,
          userId: 8,
          vanId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for the Cozy Camper (vanId: 4)
        {
          review:
            "The Cozy Camper was a perfect choice for our romantic getaway. The ambiance and attention to detail in the interior design made it feel like a cozy retreat. The comfortable bed and the well-equipped kitchenette added to the overall charm. Highly recommended for couples!",
          rating: 5,
          userId: 9,
          vanId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "The Cozy Camper provided a cozy and intimate experience. The van was clean, and the bed was comfortable. However, we found the kitchenette a bit cramped for cooking. Nonetheless, it was a great choice for a couple's retreat.",
          rating: 4,
          userId: 10,
          vanId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for the Adventurer's Dream (vanId: 5)
        {
          review:
            "The Adventurer's Dream was everything we hoped for and more. The van was well-equipped for our outdoor activities, and the ample storage space was perfect for our gear. The bed was comfortable, and the kitchenette had all the necessary amenities. We highly recommend this van for adventure seekers!",
          rating: 5,
          userId: 11,
          vanId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "We had an amazing time with the Adventurer's Dream. The van was reliable, and the bed provided a good night's sleep. The kitchenette had all the essentials. However, we noticed a minor issue with the heating system. Nonetheless, it was a great experience overall.",
          rating: 4,
          userId: 12,
          vanId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for the Family Cruiser (vanId: 6)
        {
          review:
            "The Family Cruiser was perfect for our family vacation. The spacious interior provided enough room for everyone, and the child-friendly features made traveling with kids a breeze. The bed was comfortable, and the kitchenette had all the necessary amenities. Highly recommended for families!",
          rating: 5,
          userId: 13,
          vanId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "The Family Cruiser was a comfortable and convenient choice for our family trip. The van was clean, and the bed provided a good night's sleep. However, we found the kitchenette a bit small for cooking for the whole family. Nonetheless, it was a good experience overall.",
          rating: 4,
          userId: 14,
          vanId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for the Vintage Explorer (vanId: 7)
        {
          review:
            "The Vintage Explorer was an incredible experience. The retro interior took us back in time, and the comfortable bed made it a cozy retreat. The van was well-maintained, and we appreciated the charm of the vintage design. Highly recommended for nostalgia lovers!",
          rating: 5,
          userId: 15,
          vanId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "The Vintage Explorer was a unique and fun choice. The van had a lot of character, and the bed was comfortable. However, we found the storage space a bit limited. Nonetheless, it was a memorable experience.",
          rating: 4,
          userId: 16,
          vanId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for The Prairie Rover (vanId: 8)
        {
          review:
            "The Prairie Rover was a fantastic choice for our Midwest exploration. The queen-sized bed was comfortable, and the kitchenette had all the necessary amenities. The van was clean, and the ample storage space made it easy to keep everything organized. Highly recommended!",
          rating: 5,
          userId: 17,
          vanId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "We had a great experience with The Prairie Rover. The van was reliable, and the bed provided a good night's sleep. The kitchenette was well-equipped. However, we noticed a minor issue with the power outlet. Nonetheless, it was a good experience overall.",
          rating: 4,
          userId: 18,
          vanId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reviews for The Windy City Cruiser (vanId: 9)
        {
          review:
            "The Windy City Cruiser was the epitome of luxury. The sleek and modern design created a comfortable and stylish environment. The full kitchen, luxurious queen bed, and bathroom made it feel like a true home on wheels. Highly recommended for a luxurious road trip!",
          rating: 5,
          userId: 19,
          vanId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review:
            "We had a wonderful time with The Windy City Cruiser. The van was clean, and the bed provided a good night's sleep. The kitchenette and bathroom were well-equipped. However, we found the price a bit steep compared to similar options. Nonetheless, it was a great experience overall.",
          rating: 4,
          userId: 20,
          vanId: 9,
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
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
