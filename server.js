const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const Db = require('./Database/Db')


app.listen(port, () => console.log(`the server is running in the port ${port}`))

Db()