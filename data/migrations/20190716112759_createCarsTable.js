
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
    table.bigInteger('saleId').unsigned().index().references('id').inTable('sales')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
