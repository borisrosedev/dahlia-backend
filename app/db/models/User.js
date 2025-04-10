const { DataTypes , Model } = require('sequelize')
const bcrypt = require('bcrypt')
const dbClient = require('../dbClient')


class User extends Model {}  

User.init({

    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('firstname', 
                value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
            )
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('lastname', 
                value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
            )
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(225),
        allowNull: false,
        set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, 10))
        }

    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM(["user", "admin"]),
        defaultValue: "user",
        allowNull: false
    }
}, {

    sequelize: dbClient,
    modelName: 'User',
    tableName: 'users'

})


console.log(User === dbClient.models.User)
User.sync({
    alter: true
})