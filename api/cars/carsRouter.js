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

router.post('/', validateCarData, async (req, res, next) => {
  const { VIN, make, model, mileage, transmissionType, titleStatus } = req.body;
  const newCar = {
    VIN,
    make,
    model,
    mileage,
  }
  if (transmissionType) {
    newCar.transmissionType = transmissionType
  }
  if (titleStatus) {
    newCar.titleStatus = titleStatus
  }
  try {
    const car = await carsDb.addCar(newCar);
    res.status(201).json(car)
  } catch (error) {
    next(new Error('Car creation failed. Please try again'));
  }
});

router.put('/:id', [validateCarId, validateCarData], async (req, res, next) => {
  const { VIN, make, model, mileage, transmissionType, titleStatus } = req.body;
  const carUpdates = {
    VIN,
    make,
    model,
    mileage,
  }
  if (transmissionType) {
    carUpdates.transmissionType = transmissionType
  }
  if (titleStatus) {
    carUpdates.titleStatus = titleStatus
  }
  try {
    const updatedCar = await carsDb.updateCar(req.car.id, carUpdates);
    res.status(200).json(updatedCar);
  } catch (error) {
    next(new Error('Update failed miserably! Kindly try again.'));
  }
});

router.delete('/:id', validateCarId, async(req, res, next) => {
  try {
    const deletedCount = await carsDb.removeCar(req.car.id);
    res
      .status(200)
      .json({
        count: deletedCount,
        deletedCar: req.car
      });
  } catch (error) {
    next(new Error('Car does not want to be deleted. Try again.'));
  }
});

module.exports = router;
