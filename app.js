/*
Application backend for the order tracking/planning application

Created by Daniel Tejeda
Project Start Date: 9/13/2021

Purpose: Help associates plan and track supply orders effectively.
*/

//Requirements
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const secrets = require('./util/secrets')

//Port to listen to
const PORT = 3000;

//Routes
const mgrRoutes = require('./routes/mgr');

//Initiate express application
const app = express();

//Middleware
//Middleware to parse json data
app.use(bodyParser.json());
//Temporary for testing with HTML
app.use(bodyParser.urlencoded({extended: false}));

//Set headers for our requests
app.use((req, res, next) =>
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

//Testing
app.get('/', function(req, res){
  res.sendFile(__dirname + '/testing/index.html');
  });

//Routes Middleware
app.use('/mgr', mgrRoutes);

console.log("Connecting to DB...")
mongoose.connect(secrets.MONGODBURI)
.then(res =>
  {
    console.log("Connection to DB Success...")
    app.listen(PORT)
    console.log("Server listening for connections...")
  })
  .catch(err =>
    {
      console.log("ERROR: "+ err)
    })
