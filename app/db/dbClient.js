const { Sequelize } = require('sequelize')


const dbClient = new Sequelize('dahlia', 'dahlia', 'caroline', {
    port: 5432,
    host: "localhost",
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            required: false
        }
    }
})

module.exports = dbClient