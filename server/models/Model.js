const { Schema, model } = require('mongoose');

// Example of model schema for MongoDB

const modelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  data1: {
    type: String,
    required: true,
  },
  data2: {
    type: String,
    required: true,
  },
});

const Model = model('Model', modelSchema);

module.exports = Model;
