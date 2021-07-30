var express = require('express')
var router = express.Router()

router.post('/', (req, res) => {
    const name = req.body.name
    res.render('result.ejs', {
        name: name
    })
})

module.exports = router