'use strict';

const { FILM_TABLE } = require('../models/film.model');
const { GENDER_TABLE } = require('../models/gender.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Remove the existing created_at column
    await queryInterface.removeColumn(FILM_TABLE, 'created_at');
    await queryInterface.removeColumn(GENDER_TABLE, 'created_at');

    // Add createdAt and updatedAt columns
    await queryInterface.addColumn(FILM_TABLE, 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    });
    await queryInterface.addColumn(GENDER_TABLE, 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    });

    await queryInterface.addColumn(FILM_TABLE, 'updated_at', {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'updated_at',
    });
    await queryInterface.addColumn(GENDER_TABLE, 'updated_at', {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'updated_at',
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove updatedAt column
    await queryInterface.removeColumn(FILM_TABLE, 'updated_at');
    await queryInterface.removeColumn(GENDER_TABLE, 'updated_at');

    // Add back the removed created_at column
    await queryInterface.addColumn(FILM_TABLE, 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    });
    await queryInterface.addColumn(GENDER_TABLE, 'created_at', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_at',
    });
  }
};
