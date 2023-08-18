const boom = require('@hapi/boom');

class GenderService {
  //constructor
  constructor() {

  }
  //methods

  //Error with Boom, ej:
  try {

  } catch (error) {
    throw boom.notFound('....');
  }
}

module.exports = GenderService;
