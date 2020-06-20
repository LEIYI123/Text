"use strict";
const nodemailer = require("nodemailer");

// 创建一个发送邮件的请求对象
  let transporter = nodemailer.createTransport({
    // 发送方邮箱
    host: "smtp.qq.com",  
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1150609490@qq.com', // 发送方的邮箱地址
      pass: "efivlrgooowabacc", // smtp 验证码
    },
  });

  // 邮件信息
  // let mailobj = {
  //   from: '"你的爸爸 👻来邮件了" <1658424473@qq.com>', // sender address
  //   to: "1322512096@qq.com", // list of receivers
  //   subject: "憨憨", // Subject line
  //   // text: "憨憨", // plain text body
  //   html: "<b>憨憨周利?</b>", // html body
  // }


  // 发送邮件的方法
//  setInterval(function(){
  // transporter.sendMail(mailobj);
//  },1000)

module.exports = {transporter}
//   "QQ": {
//     "domains": ["qq.com"],
//     "host": "smtp.qq.com",
//     "port": 465,
//     "secure": true
// },