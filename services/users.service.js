const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {

  constructor() {}

  async find() {
    return await models.User.findAll();
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('That user was not found')
    }
    return user;
  }

  async create(payload) {
    const newUser = await models.User.create(payload);
    return newUser;
  }

  async update(id, payload) {
    const user = this.findOne(id);
    if (!user) {
      throw boom.notFound('That user was not found')
    }
    return await user.update(payload);
  }

  async delete(id) {
    const user = this.findOne(id);
    if (!user) {
      throw boom.notFound('That user was not found')
    }
    return await user.destroy();
  }
}

module.exports = UserService;
