const express = require('express');
var router = express.Router();

// 连接数据库
require('../dbtools/connect')
const userModel = require('../dbtools/modules/user').Blog

const goodsModel = require('../dbtools/modules/goods').Blog

router.get('/car',function(req,res){
    // 拿到用户名
    let {username} = req.query

    // 存放购物车商品的数组
    let arr = []
    console.log(username)
    userModel.find({username},(err,docs)=>{
        if(!err){
            console.log(docs)
            if(docs.length == 1){
                let goodsCar = docs[0].shopping
                if(goodsCar.length != 0){
                    goodsCar.forEach((val)=>{
                        // 拿到id查询商品
                        goodsModel.find({_id:val[0]},(err,docs)=>{
                            if(!err){
                                console.log(docs)
                                arr.push(docs[0])
                            }
                        })
                    })
                    res.send({
                        code:0,
                        msg:'查询成功且购物车有数据',
                        data:arr
                    })
                }else{
                    res.send({
                        code:1,
                        msg:'购物车没有商品'
                    })
                }
            }else{
                res.send({
                    code:-1,
                    msg:'查询失败'
                })
            }
        }else{
            console.log('报错')
        }
    })
    
})

module.exports = router