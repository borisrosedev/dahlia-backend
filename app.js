const express = require('express');
const cors = require('cors');
const testConnection = require('./app/db/testConnection');
require('dotenv').config();
const userRoutes = require('./app/routes/user');

const app = express()

testConnection()

app.use(express.json({
    limit: '10mb'
}))

app.use(express.urlencoded({
    extended: true
}))


app.use('/api/v1/users', userRoutes)

app.set('port', process.env.PORT);
app.set('host', process.env.HOST);


module.exports = app