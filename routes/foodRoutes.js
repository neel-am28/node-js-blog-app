const express = require("express");
const foodController = require('../controllers/foodController');

const router = express.Router();

// get all food items
router.get('/', foodController.read_all);

// get a single item
router.get('/:id', foodController.read_single);

// get all except one
router.get('/food/:id', foodController.read_all_except_one);

// add a food item
router.post('/', foodController.add_item);

// delete a food item by it's id
router.delete('/:id', foodController.delete_item);

//update an existing food item
router.patch('/:id', foodController.update_item);

module.exports = router;
