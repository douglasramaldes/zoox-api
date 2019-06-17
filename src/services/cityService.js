'use strict'

const
  mongoose = require('mongoose'),
  CityRepository = require('../repositories/cityRepository')

class CityService {

  * find(query, fields, params) {
    return yield CityRepository.find(query, fields, params)
  }

  *
    findOne(city) {
    return yield CityRepository.findOne({
      '_id': city
    });
  }

  *
    create(city) {
    return yield CityRepository.create(city);
  }

  *
    update(city, bodyUpdate) {
    return yield CityRepository.update({
      '_id': city
    }, bodyUpdate);
  }

  *
    delete(city) {
    return yield CityRepository.delete(city);
  }
}

module.exports = new CityService();