// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        // primary key called id, integer, auto-increment
        tbl
            .increments();

        tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        tbl
            .text('instructions')
            .notNullable();
    });
  };
  
// how can I undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};