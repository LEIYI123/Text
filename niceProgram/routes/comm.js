var express = require('express');
var router = express.Router();
require('./../dbtools/connect.js')
const UserModel = require('./../dbtools/modules/Community_history.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/sendmsg.jsp',(req,res)=>{
    let Tmsg=req.query.msg
    let Tpname=req.query.Pname
    UserModel.create({pingpai:Tpname,msg:Tmsg},(err,docs)=>{
      if(!err){
        console.log('插入成功');
        res.send(docs)
      }
    })
})

router.get('/tofefush',(req,res)=>{
    let thisName = req.query.Pname
    UserModel.find({pingpai:thisName},(err,docs)=>{
      if(!err){
        res.send(docs)
      }
    })
})


module.exports = router;
