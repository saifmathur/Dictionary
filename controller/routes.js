const express = require('express')
const app = express;
const router = express.Router()


//get a database in
const Dictionary = require('../models/dictionary');

router.get('/', function(req,res){
    res.render('dictionaryFront')
})


router.get('/lookup', function(req, res){
   res.render('lookup');
    
})

router.get('/submit', function(req,res){
    res.render('submit')
})


router.post('/submit', function(req,res){
    var newWord = new Dictionary();
    newWord.word = req.body.word;
    newWord.meaning = req.body.meaning
    newWord.save(function (err){
        if (err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/lookup');
        }
    })


})

module.exports = router;