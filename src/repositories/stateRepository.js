'use strict';

const
  State = require('../models/stateModel').State

class StateRepository {

  *
    find(query, fields, params) {
    return yield State.find(query, fields, params)
  }

  *
    findOne(state, fields) {
    return yield State.findOne(state, fields)
  }

  *
    create(state) {
    return yield State.create(state)
  }

  *
    update(id, data) {
    return yield State.findOneAndUpdate(id, data, { new: true })
  }

  *
    delete(id) {
    return yield State.remove({
      '_id': id
    })
  }

}

module.exports = new StateRepository();