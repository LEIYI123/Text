var express = require('express');
var router = express.Router();
require('../dbtools/connect')
let {Blog} = require('../dbtools/modules/goods')

router.get('/xept.ajs', function(req, res) {
    let {type} = req.query
    console.log(type)
    Blog.find({type},(err,docs)=>{
        if(!err){
            res.json({
                code:1,
                msg:'succes',
                docs
            })
        }else{
            console.log(err)
        }
    })
});

router.get('/xaqin.jps',function(req,res){
    let src = req.query.img
    Blog.find({src},(err,docs)=>{
        if(!err){
            res.json({docs})
        }else{
            console.log(err)
        }
    })
})



module.exports = router;