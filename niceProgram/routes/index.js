var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken')

const mailer = require('../mailer').transporter

// 连接数据库
require('../dbtools/connect')
const userModel = require('../dbtools/modules/user.js').Blog

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


// 解密token操作

// let secretOrPrivateKey = "suiyi"; // 这是加密的key（密钥） 
// jwt.verify(token, secretOrPrivateKey, function (err, decode) {
//   if (err) { // 时间失效的时候/ 伪造的token 
//     res.send({
//       'status': '验证失败'
//     });
//   } else {
//     res.send({code:0,mseg:'success'})
//   }
// })

// 发送邮箱 验证

router.get('/loginmail', function (req, res) {
  var {
    mail
  } = req.query
  console.log(mail)

  var num = parseInt(Math.random() * 990000 + 100000)

  // 编辑邮件信息
  var mailobj = {
    from: '"验证码 👻" <1150609490@qq.com>', // sender address
    to: mail, // list of receivers
    subject: "验证码", // Subject line
    text: `你的验证码为${num} 有效期为5分钟`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  }
  mailer.sendMail(mailobj)



  res.json({
    code: 0,
    msg: 'success',
    data: num
  })
})



// 拦截注册请求
router.get('/login', function (req, res) {
  var {
    username,
    psw,
    mail
  } = req.query

  userModel.create({
    username: username,
    password: psw,
    emali: mail
  }, (err) => {
    if (!err) {
      console.log('数据插入成功')
    } else {
      console.log('报错')
    }
  })

  res.send({
    code: 0,
    msg: 'success',
  })
})

// 验证数据库中是否有相同的username
router.get('/verify', function (req, res) {
  var {
    username
  } = req.query
  userModel.find({uresname: username}, function (err, docs) {
    if (!err) {
      console.log(docs)
      if (docs.length >= 1) {
        console.log('重复')
        res.send({
          code: -1,
          msg: '用户名已存在'
        })
      } else {
        res.send({
          code: 0,
          msg: '可以使用'
        })
      }

    } else {
      console.log('报错')
    }
  })
})


// 拦截登陆请求
router.get('/landing', function (req, res) {
  var {
    username,
    psw
  } = req.query

  console.log(username,psw)
  userModel.find({
    username: username
  }, function (err, docs) {
    if (!err) {
      console.log(username,psw)
      console.log(docs)
      docs.forEach((val) => {
        if (val.password == psw) {
          let content = {
            name: username
          }; // 要生成token的主题信息
          let secretOrPrivateKey = "suiyi" // 这是加密的key（密钥） 
          let token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60 * 60 // 1小时过期
          });
          res.send({
            code: 0,
            msg: '登陆成功',
            data: token
          })
        } else {
          res.send({
            code: 1,
            msg: '账号密码错误'
          })
        }
      })
    } else {
      console.log('查询失败')
    }
  })

})

// 拦截建议的邮箱发送
router.get('/suggest',function(req,res){

  var {sug} = req.query

  var mailobj = {
    from: '"验证码 👻" <1150609490@qq.com>', // sender address
    to: '1150609490@qq.com', // list of receivers
    subject: "验证码", // Subject line
    text: sug, // plain text body
    // html: "<b>Hello world?</b>", // html body
  }
  mailer.sendMail(mailobj)
  res.send({
    code:0,
    msg:'success'
  })
})



module.exports = router;