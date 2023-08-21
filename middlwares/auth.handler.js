const boom = require('@hapi/boom');
const config = require('../config/config');

function authApiKey(req, res, next) {
  if (req.headers['api'] === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { authApiKey }
