'use strict';

const { CHARACTER_TABLE } = require('../models/character.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Remove the existing created_at column
    await queryInterface.removeColumn(CHARACTER_TABLE, 'created_at');

    // Add createdAt and updatedAt columns
    await queryInterface.addColumn(CHARACTER_TABLE, 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    });

    await queryInterface.addColumn(CHARACTER_TABLE, 'updated_at', {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'updated_at',
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove updatedAt column
    await queryInterface.removeColumn(CHARACTER_TABLE, 'updated_at');

    // Add back the removed created_at column
    await queryInterface.addColumn(CHARACTER_TABLE, 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    });
  }
};
