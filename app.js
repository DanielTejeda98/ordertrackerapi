/*
Application backend for the order tracking/planning application

Created by Daniel Tejeda
Project Start Date: 9/13/2021

Purpose: Help associates plan and track supply orders effectively.
*/

//Requirements
const express = require('express');
const bodyParser = require('body-parser');

//Port to listen to
const PORT = 3000;

//Routes
const mgrRoutes = require('./routes/mgr');

//Initiate express application
const app = express();

//Middleware
//Middleware to parse json data
app.use(bodyParser.json());
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

app.listen(PORT)