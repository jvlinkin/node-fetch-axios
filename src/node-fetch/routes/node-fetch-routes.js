const { Router } = require("express");
const nodeFetchRouter = Router()
const nodeFetchController = require('../controllers/NodeFetchController')

nodeFetchRouter.get('/show', new nodeFetchController().show)





module.exports = nodeFetchRouter