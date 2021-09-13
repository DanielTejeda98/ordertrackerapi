/*
  User model for MongoDB.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema
  ({
    _id:
    {
      //According to associate ID
      type: Number,
      required: true
    },
    username: 
    {
      type: String,
      required: true
    },
    password: 
    {
      type: String,
      required: true
    },
    inStore:
    {
      type: Number,
      required: true
    },
    accessLevel:
    {
      //0 - super
      //1 = mgr (ability to create new accounts, edit order dates, change aso access)
      //2 = aso authorized (ability to add items to system, or order)
      //3 = aso unauthorized (ability to review ordered items)
      type: Number,
      required: true
    },
    firstName: 
    {
      type: String,
      required: true
    },
    lastName:
    {
      type: String,
      required: true
    }
  });


module.exports = mongoose.model('User', userSchema);
