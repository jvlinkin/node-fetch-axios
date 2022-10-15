class AxiosRouterController {
    async show(req,res){
        return res.status(200).json({message:'Rota axios funcionando.'})

    }
}

module.exports = AxiosRouterController