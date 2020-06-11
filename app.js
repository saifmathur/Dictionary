const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./controller/routes')

mongoose.connect('mongodb+srv://saif:1234@home-cluster-yxtth.mongodb.net/Dictionary?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//mongoose.connect("mongodb+srv://saif:1234@home-cluster-yxtth.mongodb.net/test")
const app = express()

let Dictionary = require('./models/dictionary')




//load view engine
app.set('view engine','ejs')
app.set('views',__dirname + '/views')


app.use(bodyParser.urlencoded(
    { extended: false }
))

app.use(bodyParser.json());

app.use('/', require('./controller/routes'))
app.use('/lookup', require('./controller/routes'))
app.use('/submit', require('./controller/routes'))





app.listen(3000, 'localhost', function () {
    console.log('Connected');    
});
