
const router = require('express').Router();
const db = require('../data/helper.js')



// Get Dishes
// /api/dishes
router.get('/', async(req, res) => {
    try {
        const dishes = await db.getDishes();
        res.status(200).json(dishes);
        } catch(error) {
            res.status(500).json({message: 'Error retreiving dishes'})
    }
})

//Get Dish by ID
router.get('/:id', async(req, res) => {
    try {
        const dish = await db.getDish(req.params.id);
        if(dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'Could not find specific dish. :(' })
        }
    } catch(error) {
        res.status(500).json({message:'Error retrieving dish'})
    }
})



module.exports = router;