/*
  Order model for MongoDB.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema
  ({
    isOpen:
    {
      type: Boolean,
      required: true
    },
    orderDayFor:
    {
      type: String,
      required: true
    },
    orderItems:
    [{
      item: {type: Object, required: true},
      quantity: {type: Number, required: true}
    }],
    lastModifiedBy:
    {
      //Will start as null if new order
      type: Object,
      required: true
    }
  });


module.exports = mongoose.model('Order', orderSchema);
