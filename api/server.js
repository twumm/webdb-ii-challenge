const express = require('express');

const server = express();
const carsRouter = require('./cars/carsRouter');

server.use(express.json());
server.use(logger);
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.status(200).send('<h2>Welcome to cars api</h2>');
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} request from ${req.url}`
  );
  next();
}

function errorHandler(error, req, res, next) {
  console.error('ERROR:', error);
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

server.use(errorHandler);

module.exports = server;
