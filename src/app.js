const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
var port = process.env.PORT || 3000


const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)
const viewsPath = path.join(__dirname, './views')
console.log(viewsPath)


app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})












app.listen(port, () => {
    console.log('Server is up on port ' + port)
})