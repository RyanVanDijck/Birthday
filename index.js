const express = require('express')
const app = express()
const port = 3000
const DateHandler = require('./')

const countDays = require('./routes/countDays.js')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use('/countDays',countDays);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
app.get('/', (req, res) => {
    res.render('index.ejs')
})