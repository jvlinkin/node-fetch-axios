const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')


//config
app.use(express.json())
app.use(routes)






//TEST ROUTE
app.get('/', (req,res) =>{
    return res.status(200).json({message:'API is working.'})
})




app.listen(PORT, ()=> console.log(` API online em: http://localhost:${PORT}`))