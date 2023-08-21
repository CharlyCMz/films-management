const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

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

  async findOneByEmail(email) {
    const user = await models.User.findOne({
      where: { email }
    });
    return user;
  }

  async create(payload) {
    const hashPassword = await bcrypt.hash(payload.password, 7);
    const newUser = await models.User.create({
      ...payload,
      password: hashPassword
    });
    delete newUser.dataValues.password;
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
