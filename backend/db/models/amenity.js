'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: DataTypes.STRING,
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.belongsToMany(models.Spot, {
      through: 'SpotAmenity', 
      otherKey: 'amenityId',
      foreignKey: 'spotId'
    })
  };
  return Amenity;
};