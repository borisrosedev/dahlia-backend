const express = require('express');
const cors = require('cors');
const testConnection = require('./app/db/testConnection');
require('dotenv').config();
const userRoutes = require('./app/routes/user');
const path = require('path')

const app = express()

testConnection()

app.use(express.json({
    limit: '10mb'
}))

app.use(express.urlencoded({
    extended: true
}))

app.use(cors())

app.use('/images', express.static(path.join(__dirname, 'uploads')))

app.use('/api/v1/users', userRoutes)

app.set('port', process.env.PORT);
app.set('host', process.env.HOST);


module.exports = app