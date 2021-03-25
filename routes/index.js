const express = require('express');

const router = express.Router();

const notFound = router.get('/', (req, res, next) => {
  res.status(404).send('Oops! Are you lost? 🚀🤪');
  next();
});

module.exports = { router, notFound };
