const {Router}= require('express')
const routes = Router()
const axiosRouter = require('../axios/routes/axios-routes')
const fetchRouter = require('../node-fetch/routes/node-fetch-routes')

routes.use('/axios', axiosRouter)
routes.use('/fetch', fetchRouter)

module.exports = routes
