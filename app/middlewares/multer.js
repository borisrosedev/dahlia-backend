const multer  = require('multer')

//permet de créer un dossier qui va héberger les fichiers reçus par le serveu
const upload = multer({ dest: './uploads/' }).single('photo')

module.exports = upload