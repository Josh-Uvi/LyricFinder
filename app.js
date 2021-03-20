require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path');

const { notFound } = require('./routes');
const routes = require('./routes/api');

const app = express();

const options = {
  extended: false,
  type: 'Application/json',
};
app.use(express.json());
app.use(express.urlencoded(options));

// routes
app.use('/api', routes);

// serving react app on the server
if (process.env.NODE_DEV === 'production') {
  //serve the build folder from the client
  app.use(express.static(path.join(__dirname, 'client/build')));

  //serve index.html on every get request
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  //throw error not found
  app.get('/', notFound);
}

//server port
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running 🚀`);
});
