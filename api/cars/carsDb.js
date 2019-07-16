const db = require('../../data/dbConfig');

function getAllCars() {
  return db('cars');
}

function getCarById(id) {
  return db('cars')
    .where({ id });
}

function addCar(car) {
  return db('cars')
    .insert(car)
    .then(ids => getCarById(ids[0]));
}

function updateCar(id, changes) {
  return db('cars')
    .where({ id })
    .update(changes);
}

function removeCar(id){
  return db('cars')
    .where({ id })
    .del();
}

module.exports = {
  getAllCars,
  getCarById,
  addCar,
  updateCar,
  removeCar,
};
