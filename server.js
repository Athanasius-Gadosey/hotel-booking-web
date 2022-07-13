// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// import the mongoose dbs
const dbConfig = require('./db');

app.use(bodyParser.urlencoded({extended:true}));



// Server Ports
const port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log('kindly let server start')
});