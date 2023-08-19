'use strict';

const { CharacterSchema, CHARACTER_TABLE } = require('../models/character.model');
const { FilmSchema, FILM_TABLE } = require('../models/film.model');
const { GenderSchema, GENDER_TABLE } = require('../models/gender.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(FILM_TABLE, FilmSchema);
    await queryInterface.createTable(GENDER_TABLE, GenderSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('CHARACTER_TABLE');
     */
  }
};
