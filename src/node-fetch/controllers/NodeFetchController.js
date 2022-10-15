class NodeFetchController {
    async show(req,res){
        return res.status(200).json({message:'Rota Node Fetch funcionando.'})

    }
}

module.exports = NodeFetchController