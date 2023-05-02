'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    vanId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    // Booking.belongsTo(models.Van, {foreignKey: 'vanId'});
    // Booking.belongsToMany(models.User, {foreignKey: 'userId'});
  };
  return Booking;
};