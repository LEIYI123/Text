var express = require('express');
var router = express.Router();
require('./../dbtools/connect.js')
const AdidasId = require('./../dbtools/modules/goods.js').Blog

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/findId',function(req,res){
    var Tsrc=req.query.src
    AdidasId.find({src:Tsrc},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
    })
})



module.exports = router;