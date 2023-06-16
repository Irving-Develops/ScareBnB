'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert(
     "Images",
     [
       {
         vanId: 1,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1663784789344-GHBL5K7TCESICQN3986S/DSC_9104.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 1,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1663784872812-VAK57HTS5CXHB2QS4IRQ/DSC_9129.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 1,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1663784717793-PG6WYR1U6Q6Q0J27EJSG/DSC_9184.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 1,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1663784842308-ZENOWG2J58OF0I46ZD9E/DSC_9137.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 1,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1663784886063-W0E2SSR1FGTN02U8OP0K/DSC_6446.jpg?format=1500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 2,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1619472680762-UH6U4FMO1NP9U2V6PECM/VLC_Lee_015.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 2,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1619472669269-3NN9PFS3SP0HHN0N8A9A/VLC_Lee_011.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 2,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1619472659761-MH526ZGLCSJFTUH1ODAD/VLC_Lee_007.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 2,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1619472667116-1Z1WB6T1OIEXUIL1UA3K/VLC_Lee_010.jpg?format=300w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 2,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1619473178284-P3IPS2D5ZCO6CKJAZCRG/VLC_Lee_018.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 3,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610467978078-SEZQJCQIFA0GSJL5BA0R/Paquet_Promaster+159-1.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 3,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610467990393-JEZ1KPKIZSAPTW6O94FO/Paquet_Promaster+159-3.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 3,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610468009608-5EWHNPTKA6OUP1H65VK5/Paquet_Promaster+159-6.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 3,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610468047415-62FWM2BWE0XUHSEZBMIW/Paquet_Promaster+159-11.jpg?format=1500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 3,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1610468089354-EGXISKFALOJUV8KJK6RH/Paquet_Promaster+159-18.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 4,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1666291417333-Y99YVCN0EE10F7ZQDO3O/hyggevan-58.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 4,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1666291336653-ZR0FBWXF4CU2GHYHUAHR/hyggevan-10.jpg?format=1500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 4,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1666291278521-OFYCX0IC06MEHV222SWT/hyggevan-31.jpg?format=1500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 4,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1666291389351-V931PF0UATZGK9OVQNAO/hyggevan-46.jpg?format=1500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 4,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1666291351763-8CLHFEWUAO1V4BFCF4BD/hyggevan-5.jpg?format=2500w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 5,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1584481401259-6LDJILSUXP4LF4K0XZAU/VLC_POPS-58.jpg?format=1000w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 5,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1584480488209-MOQ1GASAOWLP2HHGLGLE/VLC_POPS-19.jpg?format=1000w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 5,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1584480472142-1L8VU77AJKLI5UHIAF83/VLC_POPS-11.jpg?format=1000w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 5,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1584480527726-UVS3BWMBQX9O1DSLXV5L/VLC_POPS-44.jpg?format=750w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 5,
         url: "https://images.squarespace-cdn.com/content/v1/57ef0117579fb34c2451c73b/1584480515097-X6IAO6UB13HZJCNY2T17/VLC_POPS-28.jpg?format=750w",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 6,
         url: "https://nativecampervans.com/app/uploads/2022/06/0E0A1902-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 6,
         url: "https://nativecampervans.com/app/uploads/2023/03/Native-Campervans_USA_Bastiani-73-min-1536x1025.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 6,
         url: "https://nativecampervans.com/app/uploads/2022/06/0E0A2682-min-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 6,
         url: "https://nativecampervans.com/app/uploads/2022/06/0E0A2770-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 6,
         url: "https://nativecampervans.com/app/uploads/2022/06/0E0A2790-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 6,
         url: "https://nativecampervans.com/app/uploads/2022/06/0E0A2790-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 7,
         url: "https://res.cloudinary.com/outdoorsy/image/upload/c_limit,w_2880,h_2160/t_odw,a_exif,q_auto,f_auto,h_1080,w_1440,c_fit/v1528223346/p/rentals/58002/images/jv6c9cmvcwvu7cy88jd4.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 7,
         url: "https://res.cloudinary.com/outdoorsy/image/upload/c_limit,w_2880,h_2160/t_odw,a_exif,q_auto,f_auto,h_1080,w_1440,c_fit/v1528223346/p/rentals/58002/images/rr4b20wxwrumoug5jwzm.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 7,
         url: "https://res.cloudinary.com/outdoorsy/image/upload/c_limit,w_2880,h_2160/t_odw,a_exif,q_auto,f_auto,h_1080,w_1440,c_fit/v1528223416/p/rentals/58002/images/va94urtxfelk1ybad4gs.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 7,
         url: "https://res.cloudinary.com/outdoorsy/image/upload/c_limit,w_2880,h_2160/t_odw,a_exif,q_auto,f_auto,h_1080,w_1440,c_fit/v1528223416/p/rentals/58002/images/zipojp7c0u6mgtvmquhc.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 7,
         url: "https://res.cloudinary.com/outdoorsy/image/upload/c_limit,w_2880,h_2160/t_odw,a_exif,q_auto,f_auto,h_1080,w_1440,c_fit/v1528223415/p/rentals/58002/images/on33shpsvaxvbtowtrgu.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 8,
         url: "https://nativecampervans.com/app/uploads/2022/11/DSC_5092.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 8,
         url: "https://nativecampervans.com/app/uploads/2022/05/BIGGIE_REAL_ESTATE_1-scaled-e1654803854520.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 8,
         url: "https://nativecampervans.com/app/uploads/2022/06/Open-Back-Coors-min-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 8,
         url: "https://nativecampervans.com/app/uploads/2022/05/BIGGIE_REAL_ESTATE_17-scaled-2048x1366.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 8,
         url: "https://nativecampervans.com/app/uploads/2022/06/BRETT_AND_JULES_2022_-46-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 9,
         url: "https://nativecampervans.com/app/uploads/2022/06/DSC9835-scaled.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 9,
         url: "https://nativecampervans.com/app/uploads/2022/06/Tilt.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 9,
         url: "https://nativecampervans.com/app/uploads/2022/06/Open-Side.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 9,
         url: "https://nativecampervans.com/app/uploads/2022/06/gt-18-of-18.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         vanId: 9,
         url: "https://nativecampervans.com/app/uploads/2022/06/Short-Bed-1.jpg",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};

