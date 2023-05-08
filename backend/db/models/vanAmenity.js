'use strict';
module.exports = (sequelize, DataTypes) => {
  const VanAmenity = sequelize.define('VanAmenity', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    vanId: DataTypes.INTEGER,
    amenityId: DataTypes.INTEGER
  }, {});
  VanAmenity.associate = function(models) {
    // associations can be defined here
    VanAmenity.belongsTo(models.Van, {
      foreignKey: "vanId",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return VanAmenity;
};