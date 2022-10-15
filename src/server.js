const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const axiosRoutes = require('./axios/routes/axios-routes')
const nodeFetchRoutes = require('./node-fetch/routes/node-fetch-routes')

//config
app.use(express.json())
app.use(axiosRoutes)
app.use(nodeFetchRoutes)





//TEST ROUTE
app.get('/', (req,res) =>{
    return res.status(200).json({message:'API is working.'})
})




app.listen(PORT, ()=> console.log(` API online em: http://localhost:${PORT}`))