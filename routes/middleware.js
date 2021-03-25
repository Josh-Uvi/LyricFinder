const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
};

const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
};

module.exports = {
  errorHandler,
  logErrors,
  clientErrorHandler,
};
