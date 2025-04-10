const express = require('express')
const userController = require('../controllers/user')
const upload = require('../middlewares/multer')
const route = express.Router()

route.post('/', upload, userController.store)

module.exports = route