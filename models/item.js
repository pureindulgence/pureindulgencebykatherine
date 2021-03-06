const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    instalink: {
        type: String,
        required: true,
        min: 6,
        max: 250
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    category: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    photo: {
        type: String,
        required: true,
    }
});

const Item = mongoose.model('Item', itemSchema);



module.exports = Item