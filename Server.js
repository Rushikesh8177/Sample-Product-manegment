const express = require('express')
const dotenv = require('dotenv').config()
const productRoutes = require('./routes/produtRoutes')
const catagorisRoutes = require('./routes/categorisRoutes')

const app = express()
const port = process.env.PORT  || 5000

app.use(express.json())

app.get('/', (req, res)=> res.send('Hello word') )

app.use('/api/product', productRoutes )
app.use('/api/catagoris', catagorisRoutes )

app.listen(port , ()=> console.log(`server is running on port ${port}`))

// http://localhost:7000
// http://localhost:7000/api/catagoris/getAllcatagoris

