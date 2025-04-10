const app = require('./app')
const chalk = require('chalk')

app.listen(app.get('port'), () => {
    console.log(chalk.blue(`🚀 Server running at ${app.get('host')}: ${app.get('port')}`))
})