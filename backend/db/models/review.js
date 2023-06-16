'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.STRING(500),
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    vanId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Van, {foreignKey: 'vanId'});
  };
  return Review;
};