const express = require('express');

const router = express.Router();

const notFound = router.get('/', (req, res) => {
  res.status(404).send('Oops! Are you lost? 🚀🤪');
});

module.exports = { router, notFound };
