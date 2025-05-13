const User = require('../db/models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, "../../.env")
})

const userController = {


    async show(req, res) {
        const { email } = req.auth    
        try {

            const user = User.findOne({
                where: {
                    email: email
                }
            })

            if(!user){
                return res.status(404).json({ message: "not found"})
            }

            return res.status(200).json({ user })

        } catch(err){
            return res.status(500).json({ err })
        }

    },

    async login(req, res) {
        const { email, password } = req.body 

        try {

            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user){
                return res.status(400).json({ message: "bad request"})
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password)

            if(!isPasswordValid){
                return res.status(500).json({ err})
            }

            const token = jwt.sign({ email, role: user.role }, process.env.TOKEN_SECRET_KEY, {
                expiresIn: "1h"
            })

            return res.status(200).json({ token })

        } catch(err){
            return res.status(500).json({ err })
        }
    },


    async update(req, res) {

        const { id } = req.params

        try {
            const user = await User.update({ ...req.body }, {where: {
                id: Number(id)
            }})
        } catch(err){
            res.status(500).json({ err })
        }

    },


    async store(req, res){

        const { firstname, lastname, email, password } = req.body
        const file = req.file
       

        try {
            const newUser = await User.create({ firstname, lastname, email, password, photo: file.filename})
            return res.status(200).json({user: newUser})
        } catch(err){
            return res.status(500).json({ err })
        }

   
   },


}

module.exports = userController