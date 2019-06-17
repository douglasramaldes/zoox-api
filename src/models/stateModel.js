'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
  name: { type: String, required: true },
  abbreviation: { type: String },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

module.exports.StateSchema = StateSchema;
module.exports.State = mongoose.model('State', StateSchema);
