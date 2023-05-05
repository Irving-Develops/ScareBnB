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
       //  {
       //    vanId: 6,
       //    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5a/93/4b/photo0jpg.jpg?w=1200&h=-1&s=1",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 6,
       //    url: "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/d/46/d46fa12e-745e-5538-8fb9-184411c3fcfe/5d13ddd3aeec8.hires.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 6,
       //    url: "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/e/64/e64bc637-ef81-5fc4-9d14-b603aa941bb7/5d13ddd1e0d8f.hires.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 6,
       //    url: "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/1/1b/11bd73ce-0aaa-5969-9c9d-fa52bf9fe71f/5d13ddd1ae1f2.hires.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 6,
       //    url: "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/9/c5/9c53e909-aa34-5a3e-b6e6-7fe581a2c813/5d13ddd31c3f7.image.jpg?resize=1024%2C691",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 7,
       //    url: "https://great-castles.com/photos/castles/brissac/brissac3.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 7,
       //    url: "https://manorcastles.com/wp-content/uploads/2019/10/21815025.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 7,
       //    url: "https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2017/11/chateau-de-brissac-sitting-room.jpg?w=600&ssl=1",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 7,
       //    url: "https://farm7.staticflickr.com/6124/5916639728_49fdcbddf1_c.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 7,
       //    url: "https://thumbs.dreamstime.com/b/th%C3%A9%C3%A2tre-au-ch%C3%A2teau-de-brissacn-castle-brissac-inside-castle-ch%C3%A2teau-de-brissac-110766398.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 8,
       //    url: "https://www.pedestrian.tv/wp-content/uploads/2018/09/monte-cristo-site.jpg?quality=80&resize=1280,720",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 8,
       //    url: "https://lh3.googleusercontent.com/p/AF1QipM4cOAFOGSmNSl0nTe9ZB7uKVj5LNJiNSwfDWXf=s1600-w1600",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 8,
       //    url: "https://www.traveller.com.au/content/dam/images/g/v/2/q/e/6/image.gallery.articleLeadwide.620x349.h1s58m.png/1605151966783.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 8,
       //    url: "https://www.kiis1011.com.au/wp-content/uploads/sites/2/2019/05/b.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 8,
       //    url: "https://thelittlehouseofhorrors.com/app/uploads/Monte-Cristo-entrance-via-flickr-CC-BY-ND-2.0-Edited-1-480x640.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 9,
       //    url: "https://i.ytimg.com/vi/VNKsbis_xMY/maxresdefault.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 9,
       //    url: "https://www.myrtlesplantation.com/library/slideshow-images/woodruffsuite4.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 9,
       //    url: "https://media-cdn.tripadvisor.com/media/photo-s/11/31/59/fb/the-game-room.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 9,
       //    url: "http://hauntedhouses.com/wp-content/uploads/2021/03/myrtles-plantation-ghosts-850-s-5.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
       //  {
       //    vanId: 9,
       //    url: "http://hauntedhouses.com/wp-content/uploads/2021/03/myrtles-plantation-haunted-4.jpg",
       //    createdAt: new Date(),
       //    updatedAt: new Date(),
       //  },
     ],
     {}
   );

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};

