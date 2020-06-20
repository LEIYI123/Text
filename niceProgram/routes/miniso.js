var express=require('express')
var router=express.Router()
var {Blog}=require('./../dbtools/modules/goods')
var monaoose=require('mongoose')


router.get('/',function(req,res,next){
	res.render('index',{title:'minisos'})
})


router.get('/minisooo',function(req,res){
	// let num=req.query.num;
	// res.send('成功')
	console.log('成功');
	
	
	Blog.find({},function(err,docs){
		let data=docs
		if(!err){
			res.send(data)
		}else{
			console.log(err)
			// res.send(err)
		}
	})
})

module.exports = router