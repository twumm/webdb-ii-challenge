
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments('id');
    table.timestamps();
    table.string('customerName')
      .notNullable();
    table.integer('saleAmount')
      .notNullable();
    table.foreign('id').references('id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
