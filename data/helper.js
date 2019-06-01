const knex = require('knex');

const config = require('../knexfile.js').development;
const db = knex(config);

const getDishes = () => {
    return db('dish');
}

const getDish = id => {
    return db('dish').where({ id: Number(id) });
}

const getRecipes = () => {
    return db('recipes');
}

const addDish = dish => {
    return db('dish').insert(dish);
}

const addRecipe = recipe => {
    return db('recipes').insert(recipe);
}


module.exports = {
    getDishes,
    getDish,
    getRecipes,
    addDish,
    addRecipe
}