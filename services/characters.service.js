const { Op } = require('sequelize');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
const { Film } = require('../db/models/film.model');

class CharacterService {

  constructor() {}

  async find(query) {
    const options = {
      attributes: ['image', 'name'],
      where: {}
    };
    const { limit, offset, name, age, weightMin, weightMax, movie } = query;
    if (limit & offset) {
      options.limit = limit;
      options.offset = offset;
    }
    if (name) {
      options.where.name = {
        [Op.substring]: name
      };
    }
    if (movie) {
      options.include =  {
        model: Film,
        as: 'films',
        where: {
          id: movie
        }
      }
    }
    if (age) {
      options.where.age = movie;
    }
    if (weightMin & weightMax) {
      options.where.weight = {
        [Op.gte]: weightMin,
        [Op.lte]: weightMax
      };
    }
    return await models.Character.findAll(options);
  }

  async findOne(id) {
    const character = await models.Character.findByPk(id, {
      include: ['films']
    });
    if (!character) {
      throw boom.notFound('That Character was not found')
    }
    return character;
  }

  async create(payload) {
    const newCharacter = await models.Character.create(payload);
    return newCharacter;
  }

  async update(id, payload) {
    const character = this.findOne(id);
    if (!character) {
      throw boom.notFound('That Character was not found')
    }
    return await character.update(payload);
  }

  async delete(id) {
    const character = this.findOne(id);
    if (!character) {
      throw boom.notFound('That Character was not found')
    }
    return await character.destroy();
  }
}

module.exports = CharacterService;
