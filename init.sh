#express permet de créer un serveur plus vite
#cors permet d'autoriser les communications avec le server
#express-validator va vérifier les données 
#dotenv va permettre d'ajouter des variables environnements 
#jsonwebtoken va permettre d'authentifier et autoriser l'utilisateur
#multer va permettre de lire le contenu de fichier (multipart/form-data)
#sequelize est un ORM qui va nous éviter d'écrire en SQL
#pg pg-hstore sont des drivers
npm i express cors bcrypt express-validator dotenv jsonwebtoken
npm i multer
npm i sequelize pg pg-hstore
#
mkdir -p app/controllers app/routes app/middlewares app/db/models
touch app/db/dbClient.js 
touch server.js app.js
touch docker-compose.yaml .dockerignore .gitignore