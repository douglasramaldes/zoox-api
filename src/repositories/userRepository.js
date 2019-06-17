'use strict';

const
  User = require('../models/userModel').User,
  mongoose = require('mongoose')

class UserRepository {

  *
    findOne(user) {
    return yield User.findOne(user)
      .populate('company')
  }

  *
    find(user) {
    return yield User.find(user)
  }

  *
    findIds(user, field) {
    return yield User.find(user, field)
  }

  *
    create(user) {
    user.hash = mongoose.Types.ObjectId()

    return yield User.create(user)
  }

  *
    update(id, data) {
    return yield User.update(id, data)
  }

  * findOneByIdentifier(user, fields, params) {
    return yield User.findOne(user, fields, params)
      .populate('company')
  }

}

module.exports = new UserRepository();