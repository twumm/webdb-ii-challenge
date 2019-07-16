const express = require('express')

const router = express.Router();
const carsDb = require('./carsDb');
const { validateCarId, validateCarData } = require('../middlewares/cars');

router.get('/', async (req, res, next) => {
  try {
    const cars = await carsDb.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    next(new Error('Could not retrieve cars. Please try again later.'));
  }
});

router.get('/:id', validateCarId, async (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (error) {
    next(new Error('Could not retrieve car. Please try again.'));
  }
});



module.exports = router;
