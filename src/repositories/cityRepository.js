'use strict';

const
  City = require('../models/cityModel').City

class CityRepository {

  *
    find(query, fields, params) {
    return yield City.find(query, fields, params)
      .populate('state')

  }

  *
    findOne(city, fields) {
    return yield City.findOne(city, fields)
      .populate('state')
  }

  *
    create(city) {
    return yield City.create(city)
  }

  *
    update(id, data) {
    return yield City.findOneAndUpdate(id, data, { new: true })
  }

  *
    delete(id) {
    return City.remove({
      '_id': id
    })
  }

}

module.exports = new CityRepository();