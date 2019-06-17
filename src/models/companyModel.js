'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  fantasyName: {
    type: String,
    required: true
  },
  companyName: {
    type: String
  },
  cnpj: {
    type: String
  },
  phone: {
    type: String
  },
  plan: {
    name: {
      type: String,
      enum: ['Business', 'Enterprise', 'Free']
    },
  },
  isActive: {
    type: Boolean
  }
});

module.exports.CompanySchema = CompanySchema;
module.exports.Company = mongoose.model('Company', CompanySchema);