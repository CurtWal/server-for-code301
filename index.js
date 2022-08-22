'use strict';
//  require the dotenv module
require('dotenv').config();

//  bring in the Express Module
const express = require('express')

//  define the Port to use
const port = process.env.PORT || 30002;

// instantiate the Express port
const app = express();

// route
app.get('/',(req,res) => {
    res.send('Hello World');
})












//  listen on port 3001
app.listen(port,() => {
    console.log(`Listening on port: ${port}`)
})




