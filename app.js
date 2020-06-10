const express = require('express')
const mongoose = require('mongoose')




const app = express()

//load view engine
app.set('view engine','ejs')
app.set('views',__dirname + '/views')


