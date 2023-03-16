'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotAmenity = sequelize.define('SpotAmenity', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    spotId: DataTypes.INTEGER,
    amenityId: DataTypes.INTEGER
  }, {});
  SpotAmenity.associate = function(models) {
    // associations can be defined here
    // SpotAmenity.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return SpotAmenity;
};