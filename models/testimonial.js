const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
    authorName: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
   
    testimonialDescription: {
        type: String,
        required: true,
        min: 6,
        max: 5000
    }
    
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema );



module.exports = Testimonial