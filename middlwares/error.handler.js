function errorLogger(err, req, res, next) {
  console.error(err);
  //"err" is used into the next() function to implement another error middleware
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}
module.exports = { errorLogger, errorHandler, boomErrorHandler };
