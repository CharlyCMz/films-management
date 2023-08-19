const { ValidationError } = require("sequelize");

function errorLogger(err, req, res, next) {
  console.error(err);
  //"err" is used into the next() function to implement another error middleware
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: errorHandler.name,
      errors: err.errors
    })
  }
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { errorLogger, errorHandler, boomErrorHandler, ormErrorHandler };
