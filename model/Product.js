const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model('Product', ProductSchema)
