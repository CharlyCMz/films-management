const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class FilmService {

  constructor() {}

  async find() {
    return await models.Film.findAll();
  }

  async findOne(id) {
    const film = await models.Film.findByPk(id);
    if (!film) {
      throw boom.notFound('That film was not found')
    }
    return film;
  }

  async create(payload) {
    const newfilm = await models.Film.create(payload);
    return newfilm;
  }

  async update(id, payload) {
    const film = this.findOne(id);
    return await film.update(payload);
  }

  async delete(id) {
    const film = this.findOne(id);
    return await film.destroy();
  }
}

module.exports = FilmService;
