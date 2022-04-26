const express = require('express')
const productRouter =require('./src/api/routers/product')
require('./src/config/db/Mongoose')

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(productRouter)



app.listen(port, () => {
    console.log('server listening on port ' + port)
});
