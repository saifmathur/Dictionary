const express = require('express')
const mongoose = require('mongoose')

const router = require('./controller/routes')

mongoose.connect('mongodb://localhost:27017/Dictionary',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//mongoose.connect("mongodb+srv://saif:1234@home-cluster-yxtth.mongodb.net/test")
const app = express()

//load view engine
app.set('view engine','ejs')
app.set('views',__dirname + '/views')


app.use('/', require('./controller/routes'))
app.use('/lookup', require('./controller/routes'))
app.use('/submit', require('./controller/routes'))





app.listen(3000, 'localhost');
