'use strict';

const
 City = require('../../src/models/cityModel').City,
 _ = require('lodash')

module.exports = (states, users) => (
 [
  new City({
   name: "Rio de Janeiro",
   state: _.find(states, state => state.name === 'Rio de Janeiro')._id,
   user: _.find(users, company => company.firstName === 'Admin')._id
  }),
  new City({
   name: "São Paulo",
   state: _.find(states, state => state.name === 'São Paulo')._id,
   user: _.find(users, company => company.firstName === 'Admin')._id
  }),
 ]
)
