const express = require('express')
const res = require('express/lib/response')
const app = express()


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    console.log("We're at the page boss!")
    res.render('index')
})

const projectsRouter = require('./routes/projects')

app.use('/projects', projectsRouter)

app.listen(3000)
