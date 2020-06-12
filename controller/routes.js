const express = require('express')
const app = express;
const router = express.Router()
const bodyParser = require('body-parser')



//get a database in
const Dictionary = require('../models/dictionary');
const { query } = require('express');

router.use(bodyParser.urlencoded(
    { extended: false }
))

router.use(bodyParser.json());

router.get('/', function(req,res){
    res.render('dictionaryFront')
})



router.get('/lookup', function(req, res){
    let query = {}
    query.word = req.query.word
    Dictionary.findOne(query,function(err, result){
        if(err){
            console.log(err);
            //return next(err)
        }
        else{
            console.log(result);
            res.render('lookup',{
                title: 'Dictionary',
                word: req.query.word,
                meaning: result.meaning,
            })
            
        }
    })
   /*res.render('lookup',{
       title: 'Dictionary'
   })*/
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