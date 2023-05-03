'use strict';
module.exports = (sequelize, DataTypes) => {
  const Van = sequelize.define('Van', {
    userId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    description: DataTypes.TEXT
  }, {});
  Van.associate = function(models) {
    // Van.belongsTo(models.User, {foreignKey: 'userId'})
    Van.hasMany(models.Image, {foreignKey: 'vanId',   onDelete: "cascade", hooks: true})
    Van.hasMany(models.Review, {foreignKey: 'vanId'})
    Van.hasMany(models.Favorite, {foreignKey: 'vanId'})
    Van.hasMany(models.Booking, {foreignKey: 'vanId', onDelete: "cascade", hooks: true})
    Van.belongsToMany(models.User, {
      through: 'Booking',
      otherKey: 'vanId',
      foreignKey: 'userId',
    })
    Van.belongsToMany(models.Amenity, {
      through: "VanAmenity",
      otherKey: "amenityId",
      foreignKey: "vanId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return Van;
};

