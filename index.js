const express = require('express')
const userRouter = require('./src/api/routers/User')
const itemRouter =require('./src/api/routers/Item')
const cartRouter = require('./src/api/routers/Cart')
require('./src/config/db/Mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(cartRouter)


app.listen(port, () => {
    console.log('server listening on port ' + port)
})
