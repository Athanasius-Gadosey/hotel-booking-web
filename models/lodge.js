// jshint esversion:6
const mongoose = require('mongoose');

const {Schema} = mongoose;

const logdeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Lodge = mongoose.model('Lodge', logdeSchema);

module.exports = Lodge;