'use strict'

const
  mongoose = require('mongoose'),
  StateRepository = require('../repositories/stateRepository')

class StateService {

  * find(query, fields, params) {
    return yield StateRepository.find(query, fields, params)
  }
  *
    findOne(state) {
    return yield StateRepository.findOne({
      '_id': state
    });
  }

  *
    create(state) {
    return yield StateRepository.create(state);
  }

  *
    update(state, bodyUpdate) {
    return yield StateRepository.update({
      '_id': state
    }, bodyUpdate);
  }

  *
    delete(state) {
    return yield StateRepository.delete(state);
  }
}

module.exports = new StateService();