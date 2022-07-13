// jshint esversion:6
const mongoose = require('mongoose');

let mongoURL = 'mongodb+srv://athanasuis:Blessed12@cluster0.yfsuw.mongodb.net/mern-lodge';

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

let connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo DB failed to connect');
});

connection.on('connected', () => {
    console.log('Mongo DB conected succesfully');
});

module.exports = mongoose;