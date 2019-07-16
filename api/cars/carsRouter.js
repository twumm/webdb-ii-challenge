const express = require('express')

const router = express.Router();
const carsDb = require('./carsDb');

router.get('/', async (req, res, next) => {
  try {
    const cars = await carsDb.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    next(new Error('Could not retrieve cars. Please try again later.'));
  }
})

module.exports = router;
