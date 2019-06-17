'use strict';

const
  _ = require('lodash'),
  bcrypt = require('bcryptjs'),
  User = require('../../src/models/userModel').User

module.exports = (companies, oauthClients) => (
  [
    new User({
      username: 'admin@gmail.com',
      password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8), null),
      firstName: 'Admin',
      lastName: 'Master',
      insertDate: new Date(),
      updateDate: new Date(),
      isActive: true,
      company: _.find(companies, company => company.fantasyName === 'Zoox')._id,
      oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'zoox')]
    })
  ]
)