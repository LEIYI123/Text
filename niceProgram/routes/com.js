var express = require('express');
var router = express.Router();
var app = express();
require('.././dbtools/connect')
var { Blog } = require('../dbtools/modules/goods') 
/* GET home page. */
router.get('/aaa', function (req, res, next) {
    //   res.render('', { title: '商品' });
    let arr = req.headers.referer.split('=')
     url = arr[1]
    console.log(Blog);
    
    Blog.find({type:url}, function (err, docs) {
        if (!err) {
            res.json({
                code: 1,
                docs
            })

        }else{
            console.log(err);
            
        }
    }).limit(20)
});


router.get('/paging', function (req, res, next) {
    //   res.render('', { title: '商品' });
    Blog.find({type:url}, function (err, docs) {
        if (!err) {
            res.json({
                code: 1,
                docs
            })
        }
    }).limit(20)
});



router.get('/pagingpag', function (req, res, next) {
    //   res.render('', { title: '商品' });
    let index=req.query.index;
    index=Number(index)
    
    
    Blog.find({type:url}, function (err, docs) {
        if (!err) {
        //    console.log(docs);
           res.send(docs);
        }else{
            console.log(err);
            
        }
    }).limit(20).skip(index*20)
});



module.exports = router;



var List = [{

    src: "https://uxresources.baozun.com/prod/88000060/20200426/1E3AA20B66F8016F7D40780736C3170B.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA WILO ATTEMPT",
    desc: "男女同款拖鞋",
    price: "¥769.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/E3C6D6638868C4922E0F39FEF55481B9.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "STYLE RIDER ATTEMPT MU",
    desc: "男女同款休闲鞋",
    price: "¥939.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/998C1351F9735C6DC365E462B9FE5D72.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT SACOCHE",
    desc: "男女同款小肩包",
    price: "¥369.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200426/1E3AA20B66F8016F7D40780736C3170B.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA WILO ATTEMPT",
    desc: "男女同款拖鞋",
    price: "¥769.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/E3C6D6638868C4922E0F39FEF55481B9.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "STYLE RIDER ATTEMPT MU",
    desc: "男女同款休闲鞋",
    price: "¥939.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/998C1351F9735C6DC365E462B9FE5D72.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT SACOCHE",
    desc: "男女同款小肩包",
    price: "¥369.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200426/1E3AA20B66F8016F7D40780736C3170B.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA WILO ATTEMPT",
    desc: "男女同款拖鞋",
    price: "¥769.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/E3C6D6638868C4922E0F39FEF55481B9.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "STYLE RIDER ATTEMPT MU",
    desc: "男女同款休闲鞋",
    price: "¥939.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/998C1351F9735C6DC365E462B9FE5D72.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT SACOCHE",
    desc: "男女同款小肩包",
    price: "¥369.00"

}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}, {

    src: "https://uxresources.baozun.com/prod/88000060/20200414/F64C23CEDC07C7717A1EB9FF4968D11F.jpg?x-oss-process=image/resize,m_fill,h_240,w_240",
    title: "PUMA X ATTEMPT TEE",
    desc: "男女同款短袖T恤",
    price: "¥399.00"


}]