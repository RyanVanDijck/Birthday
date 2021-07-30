var express = require('express')
var router = express.Router()
const DateHandler = require('../src/dateHandler.js')

router.post('/', (req, res) => {
    const name = req.body.name
    const day = req.body.somedate.split('-')[2]
    const month = req.body.somedate.split('-')[1]
    const dateHandler = new DateHandler(day,month)
    var result
    if (dateHandler.difference() === 0){
        result = `Happy Birthday ${name}!!`
    }
    else{
        result = `${name}, your birthday is ${dateHandler.difference()} days away`
    }
    res.render('result.ejs', {
        result: result
    })
})

module.exports = router

