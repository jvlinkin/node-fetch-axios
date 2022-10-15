const { Router, application } = require("express");
const axiosRouter = Router()
const axiosRouterController = require('../controllers/AxiosRouterController')




//Aqui usar celebrate antes de chamar o método da controller
axiosRouter.get('/show', new axiosRouterController().show)





module.exports = axiosRouter