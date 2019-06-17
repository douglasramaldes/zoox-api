const mount = require('koa-mount');

module.exports = (server) => {

	const userRouter = require('./userRouter')
	server.use(mount('/api/user', userRouter.routes())) // OK

	const companyRouter = require('./companyRouter')
	server.use(mount('/api/company', companyRouter.routes())) // OK

	const cityRouter = require('./cityRouter')
	server.use(mount('/api/city', cityRouter.routes())) // OK

	const stateRouter = require('./stateRouter')
	server.use(mount('/api/state', stateRouter.routes())) // OK

};