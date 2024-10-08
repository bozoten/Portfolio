const mongoose = require('mongoose');

// define schema for Media object
let mediaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });


let Media = mongoose.model('Media', mediaSchema);
module.exports = Media;