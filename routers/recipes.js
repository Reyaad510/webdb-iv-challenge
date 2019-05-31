
const router = require('express').Router();
const db = require('../data/helper.js')





// Get Recipes
// /api/recipes
router.get('/', async(req, res) => {
    try {
        const recipes = await db.getRecipes();
        res.status(200).json(recipes);
        } catch(error) {
            res.status(500).json({message: 'Error retreiving recipes'})
    }
})

// Add Recipe
router.post('/', async(req, res) => {
  const recipe = req.body;
    try {
      if(recipe.name && recipe.dish_id) {
      const newRecipe = await db.addRecipe(recipe);
      res.status(201).json(newRecipe);
      } else {
          res.status(400).json({ message: 'Please provide name and dish_id for your recipe!' })
      }
    } catch(error) {
        res.status(500).json({message: 'We ran into an error creating the recipe. :('})
    }
})


module.exports = router;