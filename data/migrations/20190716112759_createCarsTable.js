
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('VIN', 128)
      .unique()
      .notNullable();
    table.string('make')
      .notNullable();
    table.string('model')
      .notNullable();
    table.integer('mileage')
      .notNullable();
  });
};

exports.down = function(knex) {
  
};
