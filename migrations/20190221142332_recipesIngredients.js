// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipesIngredients', function(tbl) {
        // primary key called id, integer, auto-increment
        tbl
            .increments();

        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .float('amount')
            .notNullable();
    });
  };
  
// how can I undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipesIngredients');
};