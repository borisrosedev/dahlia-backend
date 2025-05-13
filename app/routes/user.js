const express = require('express')
const userController = require('../controllers/user')
const upload = require('../middlewares/multer')
const { register, email, password, login }= require('../middlewares/body')
const validationResult = require('../middlewares/validation-result')
const { id } = require('../middlewares/params')
const { getToken, decodeToken } = require('../middlewares/auth')
const route = express.Router()

route.post('/', upload, [register, email, password ], validationResult, userController.store)
route.post('/login', login, validationResult, userController.login)
route.post('/me', getToken, decodeToken, userController.show)
route.post('/:id',id, validationResult, userController.update)
module.exports = route