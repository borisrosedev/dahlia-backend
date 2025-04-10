const User = require('../db/models/User')


const userController = {

   store(req, res){
        //destructuring
        const { firstname, lastname, email, password } = req.body
        const file = req.file
        console.log(req.body)

        try {
            return res.status(200).json({ message: "all good"})
        } catch(err){
            return res.status(500).json({ err })
        }

   
   },

   show(req, res){

   },

   index(req, res){

   },

   update(req, res){

   },

   destroy(req, res){

   }


}

module.exports = userController