const carsDb = require('../cars/carsDb');

async function validateCarId(req, res, next) {
  const { id } = req.params;
  if (isNaN(Number(id))) {
    res.status(400).json({ message: 'Car id must be a number' }).end();
  } else {
    const car = await carsDb.getById(id);
    if (car) {
      req.car = car;
      next();
    } else {
      res.status(400).json({ message: 'Invalid car id' });
    }
  }
}

function validateCarData(req, res, next) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ message: 'Missing car data' });
  } else if (!req.body.VIN || !req.body.make
      || !req.body.model || !req.body.mileage) {
    res.status(400).json({ message: 'Missing required *VIN*, *make*, *model* and *mileage* fields' });
  } else {
    next();
  }
}

module.exports = {
  validateCarId,
  validateCarData,
};
