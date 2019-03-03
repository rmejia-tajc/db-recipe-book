
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { dish_id: '1', name: 'Tex-Mex Tacos', instructions: 'Make Tex-Mex Tacos'},
        { dish_id: '1', name: 'Granny\'s Tacos', instructions: 'Make Granny\'s Tacos'},
        { dish_id: '2', name: 'Cheese Pizza', instructions: 'Make Cheese Pizza'}
      ]);
    });
};