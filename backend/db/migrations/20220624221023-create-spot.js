'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      state: {
        type: Sequelize.STRING(50)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      history: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};