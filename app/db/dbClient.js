const { Sequelize } = require('sequelize')
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, "../../.env")
})

const dbClient = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
    port: 5432,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            required: true
        }
    }
})

module.exports = dbClient