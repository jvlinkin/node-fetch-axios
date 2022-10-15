const fetch = require('node-fetch')

class NodeFetchController {
    async show(req,res){

        try {
            const response = await fetch('https://api.adviceslip.com/advice')
            const data = await response.json();
            return res.status(200).json(data)
        } catch (error) {
            return console.log(error)
            
        }

        
        
        

    }
}

module.exports = NodeFetchController