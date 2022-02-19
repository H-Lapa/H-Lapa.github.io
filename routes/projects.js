const express = require('express')
const router = express.Router()

router.use(express.static('public'))
router.use('/css', express.static(__dirname + 'public/css'))


router.get("/", (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description',
        technologies: 'all the tech'
    }]
    res.render('project-template', {articles: articles})
})

router.get("/new", (req, res) => {
    res.render('new-project')
})

module.exports = router