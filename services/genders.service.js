const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class GenderService {

  constructor() {}

  async find() {
    return await models.Gender.findAll();
  }

  async findOne(id) {
    const gender = await models.Gender.findByPk(id);
    if (!gender) {
      throw boom.notFound('That gender was not found')
    }
    return gender;
  }

  async create(payload) {
    const newGender = await models.Gender.create(payload);
    return newGender;
  }

  async update(id, payload) {
    const gender = this.findOne(id);
    return await gender.update(payload);
  }

  async delete(id) {
    const gender = this.findOne(id);
    return await gender.destroy();
  }
}

module.exports = GenderService;
