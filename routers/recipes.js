
const router = require('express').Router();
const db = require('../data/helper.js')





// Get recipes
// /api/recipes
router.get('/', async(req, res) => {
    try {
        const recipes = await db.getRecipes();
        res.status(200).json(recipes);
        } catch(error) {
            res.status(500).json({message: 'Error retreiving recipes'})
    }
})



module.exports = router;