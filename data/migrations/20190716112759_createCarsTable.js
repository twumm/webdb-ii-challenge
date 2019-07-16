
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
    table.enu('transmissionType', ['manual', 'automatic']);
    table.enu('titleStatus', ['clean', 'salvage', 'new', 'other']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
