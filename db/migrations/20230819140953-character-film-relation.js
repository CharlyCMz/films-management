'use strict';

const { CHARACTER_FILM_TABLE, CharacterFilmSchema } = require('../models/character-film.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CHARACTER_FILM_TABLE, CharacterFilmSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CHARACTER_FILM_TABLE);
  }
};
