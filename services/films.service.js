const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class FilmService {

  constructor() {}

  async find(query) {
    const options = {
      attributes: ['image', 'title', 'release_date'],
      where: {}
    };
    const { limit, offset, name, genre, order } = query;
    if (limit & offset) {
      options.limit = limit;
      options.offset = offset;
    }
    if (name) {
      options.where.title = {
        [Op.substring]: name
      };
    }
    if (genre) {
      options.where.genderId = genre;
    }
    if (order) {
      options.order = ['release_date', order];
    }
    return await models.Film.findAll(options);
  }

  async findOne(id) {
    const film = await models.Film.findByPk(id, {
      include: ['gender', 'characters']
    });
    if (!film) {
      throw boom.notFound('That film was not found')
    }
    return film;
  }

  async create(payload) {
    const newfilm = await models.Film.create(payload);
    return newfilm;
  }

  async addCharacter(payload) {
    const newCharacter = await models.CharacterFilm.create(payload);
    return newCharacter;
  }

  async update(id, payload) {
    const film = this.findOne(id);
    if (!film) {
      throw boom.notFound('That film was not found')
    }
    return await film.update(payload);
  }

  async delete(id) {
    const film = this.findOne(id);
    if (!film) {
      throw boom.notFound('That film was not found')
    }
    return await film.destroy();
  }
}

module.exports = FilmService;
