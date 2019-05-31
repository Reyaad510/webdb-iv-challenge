const knex = require('knex');
const router = require('express').Router();



const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/recipe.db3'
    },
    useNullAsDefault: true,
}

const db = knex(knexConfig);

router.get('/', async(req, res) => {
    res.status(200).json({message: 'Test Dish Router'})
})

module.exports = router;