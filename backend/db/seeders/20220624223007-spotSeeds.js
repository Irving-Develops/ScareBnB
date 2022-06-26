'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Spots', [
  { 
    userId: 1,
    address: "1120 Westchester Pl, Country Club Park, Los Angeles, California ",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    name: "The Murder House",
    price: 499.99,
    history: 'German-American architect Alfred Rosenheim built the house in 1902, and after a five year construction, used it as his own residence. The house is sited on a sloping tree-studded 3/4 acre lot at 1120 Westchester Place in Country Club Park. The surrounding neighborhood was known as "Billionaire Row" in 1908, with some of the wealthiest families in California residing there. Over 30 people have reportedly died in the house, their angry souls trapped forever within its walls. It is believed to have been haunted since the 1920s.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 2,
    address: "1126 Queens Hwy, Long Beach, CA 90802",
    city: "Long Beach",
    state: "California",
    country: "United States",
    name: "The Queen Mary",
    price: 649.99,
    history: 'Queen Mary has been dubbed “One of the Top Ten Most Haunted Places on Earth” by Time Magazine.  As soon as you set foot aboard this once-glorious ship, you can feel that something’s just not quite right. Home to The White Lady, Little Jackie, John Henry, Grumpy, Captain Treasure Jones, John Peddar and Dana.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 3,
    address: "8 Potters Pond, Wotton-under-Edge GL12 7HF, United Kingdom",
    city: "Wotton-under-Edge",
    state: "Gloucestershire",
    country: "United Kingdom",
    name: "Ancient Ram Inn",
    price: 100.00,
    history: 'This 12th-century inn is one of the oldest in the Western world. It is believed to have once been a pagan burial ground, and boasts that it is haunted by more than 20 spirits, including ghost children and a pagan high priestess. Fearless travelers can book a stay at the inn in hopes of experiencing the spirits themselves.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  { 
    userId: 4,
    address: "Burggasse 7, 93195 Wolfsegg, Germany",
    city: "Wolfsegg",
    state: "Bavaria",
    country: "Germany",
    name: "Burg Wolfsegg",
    price: 1200,
    history: 'This 800-year-old castle in the municipality of Wolfsegg, Germany, is apparently haunted by a woman who scares off any visitors who pass. She is rumored to be the ghost of Klara von Helfenstein, who was reportedly murdered by her jealous husband. The castle is now open for visitors!',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 5,
    address: "230 2nd St, Fall River, MA 02721",
    city: "Fall River",
    state: "Massachusetts",
    country: "United States",
    name: "Lizzie Borden House",
    price: 279.00,
    history: 'The lizzie Borden House is the sight of a gruesome and highly publicized murder that occurred in 1892. Although she was acquitted, Lizzie Borden was suspected of killing her father and stepmother with a hatchet in the unassuming home. Since then, guests have reported all manner of strange sightings in the house. Rooms are available for intrepid travelers who want to experience the notorious home for themselves.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 6,
    address: "1138 Royal St, New Orleans, LA 70116",
    city: "New Orleans",
    state: "Louisiana",
    country: "United States",
    name: "LaLaurie's Mansion",
    price: 400.00,
    history: "For almost 200 years, there have been reports of paranormal activity coming from this house. It shouldn't surprise many that many hauntings are attributed to the slaves that Madame LaLaurie kept on the property. There is a room in the LaLaurie Mansion where slaves were often kept - and reports of moaning coming from that room are common. Phantom footsteps echo through the house with regularity. Many people who have stood near the house have reported feeling as if they were taken over by negative energy.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 7,
    address: "1 RUE JEANNE SAY, 49320 Brissac-Loire-Aubance, France",
    city: "Brissac-Loire-Aubance",
    state: "Pays de la Loire",
    country: "France",
    name: "Château de Brissac",
    price: 999.99,
    history: "Dubbed as the 'Giant of the Loire Valley' this is the highest castle in France boasting seven floors, 204 rooms, numerous portrait galleries, and a private opera house which seats 200 people. It was a fortress built by the Counts of Anjou in the 11th Century. Visitors have reported seeing La Dame Verte, (Green Lady), who was apparently the illegitimate child of King Charles VII and was later murdered by her husband.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 8,
    address: "1 Homestead Ln, Junee NSW 2663, Australia",
    city: "Junee",
    state: "New South Wales",
    country: "Australia",
    name: "Monte Cristo Homestead",
    price: 300.00,
    history: "Monte Cristo Homestead is one of Australia's most haunted homes. Perched on a hill overlooking Junee in the Riverina region of NSW, it certainly looks the part.vBuilt by the Crawley family in the 1880 s, it's an imposing two-story Victorian mansion with high ceilings and ornate cast-iron balconies.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    userId: 9,
    address: "7747 US-61, St Francisville, LA 70775",
    city: "St. Francisville",
    state: "Louisiana",
    country: "United States",
    name: "The Myrtles Plantation",
    price: 500.00,
    history: "One of America's most haunted sites, this plantation is reportedly home to at least 12 different ghosts, including that of William Winter, who was murdered in the house. Come book a stay at this beautiful but unimaginable spooky plantation!",
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
