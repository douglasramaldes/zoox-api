'use strict';

const
	mongoose = require('mongoose'),
	Router = require('koa-router'),
	CityService = require('../../services/cityService'),
	_ = require('lodash')

let cityRouter = new Router()

cityRouter.get('', function* (next) {
	try {
		let query = {
			user: this.user._id
		}

		let cities = yield CityService.find(query)

		if (!cities)
			this.throw(404, 'Cities not found!')

		this.body = cities
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

cityRouter.get('/:id', function* (next) {
	try {

		const cityId = this.params.id;

		if (!mongoose.Types.ObjectId.isValid(cityId)) this.throw(400, 'The submitted ID is not valid');

		let city = yield CityService.findOne(cityId)

		if (!city)
			this.throw(404, 'City not found!')

		this.body = city
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

cityRouter.post('/', function* (next) {
	try {

		const data = this.request.body;
		if (!data.name) this.throw(400, 'Name was not sent');

		const city = {
			user: this.user._id,
			state: data.stateId ? data.stateId : null,
			name: data.name
		}

		let newCity = yield CityService.create(city)

		if (!newCity)
			this.throw(400, 'Error in City creation!')

		this.body = newCity
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

cityRouter.put('/:id', function* (next) {
	try {
		let bodyUpdate = this.request.body,
			update
		const cityId = this.params.id;

		if (!mongoose.Types.ObjectId.isValid(cityId)) this.throw(400, 'The submitted ID is not valid');

		const cityUpdate = {
			user: this.user._id,
			state: bodyUpdate.stateId,
			name: bodyUpdate.name,
			updated_at: new Date()
		}

		update = yield CityService.update(cityId, cityUpdate)

		if (!update)
			this.throw(400, 'Error in City update!')

		this.body = update
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

cityRouter.del('/:id', function* (next) {
	try {
		const cityId = this.params.id;

		if (!mongoose.Types.ObjectId.isValid(cityId)) this.throw(400, 'The submitted ID is not valid');

		let city = yield CityService.findOne(cityId)

		if (!city)
			this.throw(404, 'City not found!')

		let deleteCity = yield CityService.delete(cityId)

		if (!deleteCity)
			this.throw(400, 'Error in delete City!')

		this.body = "City successfully removed"
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})



module.exports = cityRouter