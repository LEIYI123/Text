var express = require('express');
var router = express.Router();
var {Blog}  = require('./../dbtools/modules/goods')
var mongoose=require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'converse' });
});
router.get('/converseTwo',function(req,res){
  let num=req.query.num;
  num=Number(num)
  console.log(num);
  Blog.count({type:'converse'},function(err,count){
    if(!err){
      console.log(count);
      if(count>0){
        Blog.find({},function(err,docs){
          let data=docs
          if(!err){
            res.send(data)
          }else{
            console.log(err);
            res.send(err)
          }
        }).limit(8).skip(num*8)
      }
    }else{
      console.log(err);
    }
  })
})

module.exports = router;
// .limit(2).skip(num)