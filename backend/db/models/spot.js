'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    history: DataTypes.TEXT
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, {foreignKey: 'userId'})
    Spot.hasMany(models.Image, {foreignKey: 'spotId'})
  };
  return Spot;
};