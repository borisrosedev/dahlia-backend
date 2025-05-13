const { body } = require("express-validator");


const  bodyMiddlewares = {

    register: body(["email", "firstname", "lastname", "password"]).notEmpty(),
    login: body(["email", "password"]).notEmpty(),
    email: body('email').isEmail(),
    password: body('password').trim().isStrongPassword({ minNumbers: 1, minSymbols: 1, minUppercase: 1, minLowercase: 1, minLength: 8 })
    

}

module.exports = bodyMiddlewares