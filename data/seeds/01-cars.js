
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '378USFGDSD7BFER74', make: 'Toyota', model: 'Camry', mileage: 4234, transmissionType: 'manual'},
        {VIN: '4875THFR7H34F38HF', make: 'BMW', model: 'X5', mileage: 20000, transmissionType: 'automatic'},
        {VIN: 'ERT34R42D24R2D232', make: 'Tesla', model: 'Model S', mileage: 44, transmissionType: 'automatic'},
      ]);
    });
};
