const express = require('express');
const helmet = require('helmet');


const db = require('./recipeBookHelpers.js')

const server = express();

server.use(helmet());
server.use(express.json());




// endpoints


server.get('/api/dishes', async (req, res) => {

    try {
        const dishes = await db.getDishes();

        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json(error);
    }

});


server.get('/api/dishes/:id', async (req, res) => {

    try {
        const {id} = req.params;  
        const dish = await db.getDishes(id);

    if (dish) {
        res.status(200).json(dish);
    } else {
        res.status(404).json({ message : 'The entry with that specified ID does not exist'});
    }

    } catch (error) {
    res.status(500).json(error);
    }
});

server.get('/api/recipes', async (req, res) => {

    try {
        const recipes = await db.getRecipes();

        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    }

});





const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n*** running on ${port} ***\n`));
