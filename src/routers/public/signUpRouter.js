'use strict';

const
  Router = require('koa-router'),
  User = require('../../models/userModel').User,
  UserService = require('../../services/userService'),
  ConstantService = require('../../services/constantService'),
  _ = require('lodash')

let signUpRouter = new Router()

signUpRouter.post('/signup', function* (next) {
  let params = this.request.body
  params.password = UserService.generateHash(params.password)
  params.username.toLowerCase()
  params.isActive = true
  params.oauthClients = [ConstantService.oAuthClientSite._id]

  let user = yield User.create(params)

  this.body = user
});

module.exports = signUpRouter