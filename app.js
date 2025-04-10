const express = require('express')
const cors = require('cors')
const testConnection = require('./app/db/testConnection')
require('dotenv').config()


const app = express()


testConnection()

app.use(express.json({
    limit: '10mb'
}))

app.use(express.urlencoded({
    extended: true
}))


app.get('/test', (req, res) => {
    res.status(200).json({ message: 'TEST RÉUSSI'})
})


app.set('port', process.env.PORT);
app.set('host', process.env.HOST);


module.exports = app