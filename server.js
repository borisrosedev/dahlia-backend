const app = require('./app')


app.listen(app.get('port'), () => {
    console.log(`🚀 Server running at ${app.get('host')}: ${app.get('port')}`)
})