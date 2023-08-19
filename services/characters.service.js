const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CharacterService {

  constructor() {}

  async find() {
    return await models.Character.findAll();
  }

  async findOne(id) {
    const character = await models.Character.findByPk(id);
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
    return await character.update(payload);
  }

  async delete(id) {
    const character = this.findOne(id);
    return await character.destroy();
  }
}

module.exports = CharacterService;
