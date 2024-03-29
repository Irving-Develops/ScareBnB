'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    vanId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, {foreignKey: 'userId'})
    Favorite.belongsTo(models.Van, {foreignKey: 'vanId'})
  };
  return Favorite;
};