const express = require('express');
const foodModel = require('../models/food');

const app = express();

// get all food items
app.get('/foods', async (req, res) => {
    const foods = await foodModel.find({}).sort({id: -1});
    try {
      res.send(foods);
    } catch (err) {
      res.status(500).send(err);
    }
});

// add a food item
app.post('/food', async (req, res) => {
    const food = new foodModel(req.body); 
    try {
      await food.save();
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
    }
});

// delete a food item by it's id
app.delete('/food/:id', async (req, res) => {
    try{
        const food = await foodModel.findByIdAndDelete(req.params.id);
        if(!food) res.status(404).send("No item found");
        res.status(200).send();
    } catch(err) {
        res.status(500).send(err);
    }
});

//update an existing food item
app.patch('/food/:id', async (req, res) => {
    try {
      const food = await foodModel.findByIdAndUpdate(req.params.id, req.body);
      await food.save();
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = app;