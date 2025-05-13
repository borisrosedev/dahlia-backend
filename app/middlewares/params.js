const { param } = require("express-validator");


const  paramsMiddlewares = {

    id: param('id').notEmpty()

}

module.exports = paramsMiddlewares