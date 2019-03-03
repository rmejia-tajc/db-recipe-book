
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'cup of cheese'},
        { name: 'tbs salt'},
        { name: 'tortilla'},
        { name: 'cup of flour'}
      ]);
    });
};