const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({
    path:path.resolve(__dirname, "../../.env")
})


const authMiddlewares = {

    getToken(req, res, next){

        const { authorization } = req.headers
        if(!authorization){
            return res.status(400).json({ message: "bad request"})
        }

        const token = authorization.split(" ")[1]
        if(!token) {
            return res.status(400).json({ message: "bad request"})
        }

        req.auth = token
        next()
    },

    decodeToken(req,res, next){
        const { auth } = req

        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY)

        if(!decodedToken){
            return res.status(403).json({ message: "bad request"})
        }

        req.auth = decodedToken

        next()
    }

}

module.exports = authMiddlewares