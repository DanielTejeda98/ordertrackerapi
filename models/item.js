/*
  Item model for MongoDB.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema
  ({
    _id:
    {
      //According to item ID
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
    },
    qty:
    {
      type: Number
    },
    imageUrl:
    {
      type: String
    }
  });


module.exports = mongoose.model('Item', itemSchema);
