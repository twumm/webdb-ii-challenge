const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).send('<h2>Welcome to cars api</h2>');
});

module.exports = server;
