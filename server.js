const express = require('express')
const res = require('express/lib/response')
const app = express()
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    console.log("We're at the page boss!")
    res.render("index")
})

app.listen(3000)