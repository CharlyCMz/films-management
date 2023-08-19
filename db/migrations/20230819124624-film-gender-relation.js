'use strict';

const { FILM_TABLE } = require('../models/film.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add a new column 'genderId' to the 'films' table
    await queryInterface.addColumn(FILM_TABLE, 'gender_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'genders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    // Add an index to the 'gender_id' column for better performance
    await queryInterface.addIndex(FILM_TABLE, ['gender_id']);
  },

  async down (queryInterface) {
    // Remove the 'gender_id' column from the 'films' table
    await queryInterface.removeColumn('films', 'gender_id');
  }
};
