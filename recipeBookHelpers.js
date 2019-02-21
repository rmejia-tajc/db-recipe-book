const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);



module.exports = {
    
    getDishes: (id) => {
      if(id) {
        return db('dishes').where('id', id)
      } 
      return db('dishes')
    },

    addDish: (dish) => {
      return db('dishes').insert(dish)
    },
  
    getRecipes: () => {
      return db('recipes')
        .join('dishes', 'recipes.dish_id', 'dishes.id')
        .select('recipes.id', 'recipes.name', {dishName: 'dishes.name'})
    },
    
	addRecipe: recipe => {
		return db('recipies').insert(recipe);
	},

  
  }