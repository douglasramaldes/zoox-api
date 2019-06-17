'use strict';

const OAuthToken = require('../models/oAuthTokenModel').OAuthToken;
const User = require('../models/userModel').User;

module.exports = function* (next) {

  let bearerToken = this.headers.authorization.substring(7);
  let accessToken = yield OAuthToken.findOne({
    accessToken: bearerToken
  })
    .populate({
      path: 'user',
      populate: {
        path: 'company'
      }
    })
    .lean();

  this.user = accessToken.user;
  yield next;

};