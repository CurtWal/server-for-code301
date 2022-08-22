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

// send the use a StarWars Character
app.get('/starwars',(req,res) => {
    res.send({
        characterName: 'Luke Skywalker',
        characterAge: 95,
        light_saber: 'green',
        dad: 'The bad guy',
        quip: 'May the force be with you....'
    })
})


app.get('/starwars/:id',(req,res) => {
    if(req.params.id !== leia) {
        res.send(400)
    }else{
        res.send({
       characterName: 'Leia',
        characterAge: 95.5,
        light_saber: 'blue',
        dad: ' The god Guy',
        })
    }
    // res.send(
    //     req.params.id
    // )
})







//  listen on port 3001
app.listen(port,() => {
    console.log(`Listening on port: ${port}`)
})




