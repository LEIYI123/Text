// const UserModel = require('./../../dbtools/modules/Community_history.js')
let the_tanchubox = document.querySelector('.the_tanchubox')
let pinlun_btn = document.querySelector('.pinlun')
let pinlunmsg_box = document.querySelector('.pinlunmsg_box')

pinlun_btn.onclick = function () {
    pinlunmsg_box.style.transform = 'translateY(20px)'
}

let pinlun_shanchu = document.querySelector('.pinlun_shanchu')
pinlun_shanchu.onclick = function () {
    if (the_tanchubox.style.display == 'none') {
        the_tanchubox.style.display = 'block'
    } else {
        the_tanchubox.style.display = 'none'
    }
}

// 评论的取消按钮
let pl_dele = document.querySelector('.pl_dele')
let pinlunmsg = document.querySelector('.pinlunmsg')
pl_dele.onclick = function () {
    pinlunmsg_box.style.transform = 'translateY(-110%)'
    pinlunmsg.value = ''
}

// 给每一个进入按钮设置点击事件
let the_login = document.querySelectorAll('.tooIn')

let shequ_h1 = document.querySelector('.the_tanchubox>h1')
let the_userbox_box = document.querySelector('.the_userbox_box')
the_login.forEach((i, index) => {
    the_login[index].onclick = function () {
        let this_name = i.getAttribute('data-name')
        the_tanchubox.style.display = 'block'
        shequ_h1.innerHTML = `${this_name}`

        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let resText = JSON.parse(xhr.responseText)
                if (resText.length > 0) {
                    the_userbox_box.innerHTML = ''
                    resText.forEach((i, index) => {
                        let ivalue = i.msg
                        let iname = i.pingpai
                        new makeBox(the_userbox_box, iname, ivalue)
                    })
                } else {
                    the_userbox_box.innerHTML = '目前还没有人评论！！'
                }

            }
        }
        xhr.open('get', '/comm/tofefush?Pname=' + this_name)
        xhr.send(null)
    }
})

let msg_btn = document.querySelector('.msg_btn')
msg_btn.onclick = function () {
    let Pname = shequ_h1.innerHTML
    if (pinlunmsg.value != '' && pinlunmsg.value) {

        // 这个ajax是实现发送消息后马上刷新这个框框
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let resText = JSON.parse(xhr.responseText)
                let ivalue = resText.msg
                let iname = resText.pingpai
                new makeBox(the_userbox_box, iname, ivalue)
            }
        }
        xhr.open('get', '/comm/sendmsg.jsp?msg=' + pinlunmsg.value + '&&Pname=' + Pname)
        xhr.send(null)
    }
    // new refush(Pname)
    pinlunmsg.value = ''
    pinlunmsg_box.style.transform = 'translateY(-110%)'
}

// class refush{
//     constructor(Pname){
//         this.Pname=Pname
//     }
//     init(){
//         let xhr= new XMLHttpRequest()
//         xhr.onreadystatechange=function(){

//         }
//         xhr.open('get','/comm/tofefush?Pname='+this.Pname)
//         xhr.send(null)
//     }
// }


//创建每个人评论的盒子
class makeBox {
    constructor(parent, title_name, content_text) {
        this.parent = parent
        this.name = title_name
        this.text = content_text
        this.init()
    }
    init() {
        this.box = document.createElement('div')
        this.h3 = document.createElement('h3')
        this.h3.innerHTML = this.name
        this.p = document.createElement('p')
        this.p.innerHTML = this.text
        this.box.classList.add('the_userbox')
        this.p.classList.add('user_talk')
        this.box.appendChild(this.h3)
        this.box.appendChild(this.p)
        this.parent.appendChild(this.box)
    }
}
