const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render('project-template')
})

router.get("/new", (req, res) => {
    
})

module.exports = router