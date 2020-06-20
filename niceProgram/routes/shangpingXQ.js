var express = require('express');
var router = express.Router();
var goods = require('./../dbtools/modules/goods.js').Blog;
var user = require('./../dbtools/modules/user.js').Blog;
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'converse' });
});

router.get('/shangpingXQ', function (req, res) {
    let num = req.query.id;
    console.log(num);
    goods.count({}, function (err, count) {
        if (!err) {
            if (count > 0) {
                goods.find({ _id: num }, function (err, docs) {
                    if (!err) {
                        res.send(docs)
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            console.log(err);
        }
    })
})

router.get('/shoucang', function (req, res) {
    var ids = req.query.id;
    var username = req.query.username;
    user.find({ username: username }, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            if (docs[0].collect == '') {
                user.update({
                    username: username    //查询到特定的一条数据
                }, {
                    $push: {
                        collect: { id: ids }
                    }
                }, (err) => {
                    res.send('插入成功')
                });
                // res.send(docs[0].collect)
            } else {
                var num = docs[0].collect
                res.send(num)
            }
        }
    })
})

router.get('/creatNum', function (req, res) {
    let ids = req.query.id;
    let usernames = req.query.username;
    user.update({
        username: usernames    //查询到特定的一条数据
    }, {
        $push: {
            collect: { id: ids }
        }
    }, (err) => {
        res.send('插入成功')
    });
})


router.get('/goumai', function (req, res) {
    var ids = req.query.id;
    var username = req.query.username;
    console.log(ids, 999, username, 888);
    user.find({ username: username }, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            if (docs[0].shopping == '') {
                user.update({
                    username: username    //查询到特定的一条数据
                }, {
                    $push: {
                        shopping: { id: ids }
                    }
                }, (err) => {
                    res.send('插入成功')
                });
                // res.send(docs[0].collect)
            } else {
                var num = docs[0].collect
                res.send(num)
            }
        }
    })
})

router.get('/creatShopping', function (req, res) {
    let ids = req.query.id;
    let usernames = req.query.username;
    user.update({
        username: usernames    //查询到特定的一条数据
    }, {
        $push: {
            shopping: { id: ids }
        }
    }, (err) => {
        res.send('插入成功')
    });
})



module.exports = router;
// .limit(2).skip(num)