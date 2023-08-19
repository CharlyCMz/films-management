const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class GenderService {
  //constructor
  constructor() {

  }
  //methods
async find() {
  return await models.Gender.findAll()
}
  //Error with Boom, ej:
//   try {

//   } catch (error) {
//     throw boom.notFound('....');
//   }
}

module.exports = GenderService;
