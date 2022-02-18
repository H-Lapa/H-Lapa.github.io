const express = require('express')
const router = express.Router()

router.use(express.static('public'))
router.use('/css', express.static(__dirname + 'public/css'))


router.get("/", (req, res) => {
    res.render('project-template')
})

router.get("/new", (req, res) => {
    res.render('new-project')
})

module.exports = router