const express = require('express')
const app = express;
const router = express.Router()


//get a database in
const dictionary = ('../models/dictionary');

router.get('/', function(req,res){
    res.render('dictionaryFront')
})


router.get('/lookup', function(req, res){
    res.render('lookup');
})

router.get('/submit', function(req,res){
    res.render('submit')
})



//router.post()

module.exports = router;