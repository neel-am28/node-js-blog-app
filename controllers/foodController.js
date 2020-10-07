// reuiqre foodModel
const Food = require('../models/food');

// read all food items
const read_all = (req, res) => {
    Food.find()
        .sort({ _id: -1 })
        .then((result) => res.send(result))
        .catch((err) => res.status(500).send(err));
}

// read a single item by it's id
const read_single = (req, res) => {
    Food.findById(req.params.id)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
}

// read all food items except one
const read_all_except_one = (req, res) => {
    Food.find({_id: { $ne : req.params.id } })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
}
// add a food item
const add_item = (req, res) => {
    const item = new Food(req.body);
    item.save()
        .then((result) => res.send(result))
        .catch((error) => res.status(500).send(err));
}

// delete a food item by it's id
const delete_item = (req, res) => {
    Food.findByIdAndDelete(req.params.id)
        .then((result) => res.send(`You deleted item: ${result}`))
        .catch((err) => res.status(500).send(`Item ${req.params.id} is not found`));
}

// update an item by it's id
const update_item = (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((result) => res.send(result))
        .catch((err) => res.status(500). send(err));
}

module.exports = {
    read_all,
    read_single,
    read_all_except_one,
    add_item,
    delete_item,
    update_item
}