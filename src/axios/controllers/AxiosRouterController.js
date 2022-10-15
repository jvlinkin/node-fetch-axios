const axios = require('axios')

class AxiosRouterController {
    async show(req,res){

        try {
            const response = await axios.get('https://api.adviceslip.com/advice')
            return res.status(200).json(response.data)
        } catch (error) {
            return console.log(error)
        }
        

    }
}

module.exports = AxiosRouterController