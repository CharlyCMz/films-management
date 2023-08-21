const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { Strategy } = require('passport-local');

const UserService = require('../../../services/users.service');
const userService = new UserService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    const user = await userService.findOneByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false)
    }
    const validUser = await bcrypt.compare(password, user.password);
    if (!validUser) {
      done(boom.unauthorized(), false)
    }
    delete user.dataValues.password;
    done(null, true)
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
