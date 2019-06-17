'use strict';

const
  State = require('../../src/models/stateModel').State,
  _ = require('lodash')

module.exports = (users) => (
  [
    new State({
      name: "Rio de Janeiro",
      abbreviation: "RJ",
      user: _.find(users, user => user.firstName === 'Admin')._id
    }),
    new State({
      name: "São Paulo",
      abbreviation: "SP",
      user: _.find(users, user => user.firstName === 'Admin')._id,
    }),
  ]
)
