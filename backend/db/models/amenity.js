'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    name: DataTypes.STRING,
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.belongsToMany(models.Van, {
      through: "VanAmenity",
      otherKey: "vanId",
      foreignKey: "amenityId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return Amenity;
};