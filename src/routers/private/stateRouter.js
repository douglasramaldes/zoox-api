'use strict';

const
	mongoose = require('mongoose'),
	Router = require('koa-router'),
	StateService = require('../../services/stateService'),
	_ = require('lodash')

let stateRouter = new Router()

stateRouter.get('', function* (next) {
	try {
		let query = {
			user: this.user._id
		}
		let states = yield StateService.find(query)

		if (!states)
			this.throw(404, 'States not found!')

		this.body = states
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

stateRouter.get('/:id', function* (next) {
	try {
		const stateId = this.params.id;

		if (!mongoose.Types.ObjectId.isValid(stateId)) this.throw(400, 'The submitted ID is not valid');

		let state = yield StateService.findOne(stateId)

		if (!state)
			this.throw(404, 'State not found!')

		this.body = state
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

stateRouter.post('/', function* (next) {
	try {

		const data = this.request.body;

		if (!data.name) this.throw(400, 'Name was not sent');

		const state = {
			user: this.user._id,
			abbreviation: data.abbreviation,
			name: data.name
		}

		let newState = yield StateService.create(state)

		if (!newState)
			this.throw(400, 'Error in State creation!')

		this.body = newState
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

stateRouter.put('/:id', function* (next) {
	try {
		let bodyUpdate = this.request.body,
			update

		const stateId = this.params.id;

		if (!mongoose.Types.ObjectId.isValid(stateId)) this.throw(400, 'The submitted ID is not valid');

		bodyUpdate.updated_at = new Date()
		delete bodyUpdate.created_at

		update = yield StateService.update(stateId, bodyUpdate)

		if (!update)
			this.throw(400, 'Error in State update!')

		this.body = update
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})

stateRouter.del('/:id', function* (next) {
	try {

		const stateId = this.params.id;

		if (!mongoose.Types.ObjectId.isValid(stateId)) this.throw(400, 'The submitted ID is not valid');

		let state = yield StateService.findOne(stateId)

		if (!state)
			this.throw(404, 'State not found!')

		let deleteState = yield StateService.delete(stateId)

		if (!deleteState)
			this.throw(400, 'Error in delete State!')

		this.body = "State successfully removed"
		this.status = 200

	} catch (err) {

		this.body = err.message
		this.status = 400
	}
})



module.exports = stateRouter