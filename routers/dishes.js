
const router = require('express').Router();
const db = require('../data/helper.js')



// Get Dishes
// /api/dishes
router.get('/', async(req, res) => {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
})



module.exports = router;