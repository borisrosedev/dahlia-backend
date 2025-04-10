const dbClient = require('./dbClient')

async function testConnection(){
    try {
        await dbClient.authenticate()
        console.log(`✅ Connexion avec la bdd réussie`)
    } catch {
        console.log(`❌ Connexion avec la bdd échouée`)
    }
}

module.exports = testConnection

