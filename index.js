require('dotenv').config();
const express = require('express')
const userRouter = require('./src/api/routes/userRoute')
require("./src/config/database/db"); //import the database


const port = process.env.PORT || 3000;

const app = express()

app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
  console.log('server listening on port ' + port)

});

