const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

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