'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: { type: String, required: true },
  state: { type: Schema.Types.ObjectId, ref: 'State' },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

module.exports.CitySchema = CitySchema;
module.exports.City = mongoose.model('City', CitySchema);
