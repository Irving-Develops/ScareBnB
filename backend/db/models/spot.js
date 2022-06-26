'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    history: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Spot;
};