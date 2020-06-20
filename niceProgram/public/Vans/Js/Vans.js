let program_delete = document.querySelector('.program_delete')
let head_title = document.querySelector('.head')
program_delete.onclick = function () {
    head_title.classList.add('none')
}
// 轮播 
var left = document.querySelector('.Rotation_left')
var right = document.querySelector('.Rotation_right')
var box = document.querySelectorAll('.Rotation_box')
var boxImg = document.querySelectorAll('.Rotation_box img')
var more_img = document.querySelectorAll('.more_img')
var moreImg = document.querySelectorAll('.more_img img')
var header = document.querySelector('header')
var sec_right = document.querySelectorAll('.sec_right li')
// console.log(header);
// console.log(sec_right);


// 设置图片默认位置
var num = -355
for (var i = 0; i < box.length; i++) {
    box[i].style.left = num + 'px'
    num += 355
}

  function show() {
        for (var i = 0; i < box.length; i++) {
            var num = parseInt(box[i].style.left)
            box[i].style.left = num - 355 + 'px'
            if (box[i].style.left == '-710px') {
                box[i].classList.add('none')
                box[i].style.left = '1065px'
                setTimeout(function (i) {
                    for (var i = 0; i < box.length; i++) {
                        if (box[i].className == 'Rotation_box none') {
                            box[i].classList.remove('none')
                        }
                    }
                }, 400)
    
            }
        }
    
    }
    
    function move() {
        console.log(123);
    
        for (var i = 0; i < box.length; i++) {
            if (box[i].style.left == '1065px') {
                box[i].classList.add('none')
                box[i].style.left = '-710px'
                setTimeout(function (i) {
                    for (var i = 0; i < box.length; i++) {
                        if (box[i].className == 'Rotation_box none') {
                            box[i].classList.remove('none')
                        }
                    }
                }, 400)
            }
            var num = parseInt(box[i].style.left)
            box[i].style.left = num + 355 + 'px'
    
        }
    }

left.addEventListener('click', debounce(move, 300))
right.addEventListener('click', debounce(show, 300))

// 防抖函数
function debounce(fn, delay) {
    var timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        var arg = arguments[0]
        timer = setTimeout(function () {
            fn(arg)
        }, delay)
    }
}
// 节流
function throttle(fn, delay) {
    var timer = null
    return function () {
        if (timer) {
            return
        }
        var arg = arguments[0]
        var that = this
        timer = setTimeout(function () {
            fn.call(that, arg)
            timer = null
        }, delay)
    }
}


// 轮播鼠标移入hover
for (var i = 0; i < box.length; i++) {
    boxImg[i].onmouseover = function () {
        this.style.transform = 'scale(1.03)'
    }
    boxImg[i].onmouseout = function () {
        this.style.transform = 'scale(1)'
    }
}
// 图片移入hover
for (var i = 0; i < moreImg.length; i++) {
    moreImg[i].onmouseover = function () {
        this.style.transform = 'scale(1.03)'
    }
    moreImg[i].onmouseout = function () {
        this.style.transform = 'scale(1)'
    }
}

// 置顶按键功能实现

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop

    if (scrollTop >= 210) {
        sec_right[2].classList.remove('none')
    } else {
        sec_right[2].classList.add('none')
    }
    // console.log(scrollTop);

}, false)


// 打开注册的遮罩层

$('.login')[0].addEventListener('click',()=>{

    $('.model')[0].childNodes[1].innerHTML = '注册'

    $('.cover')[0].classList.remove('vanish')
    $('.model')[0].classList.remove('vanish')

    // 隐藏登陆的界面
    $('.model .in')[0].classList.add('vanish')
    $('.model .input')[0].classList.remove('vanish')
})

// 关闭注册的遮罩层

$('.close span')[0].addEventListener('click',()=>{
    $('.cover')[0].classList.add('vanish')
    $('.model')[0].classList.add('vanish')
})


// 验证输入框的内容

function verify(id){
    switch (id){
        case "username":
            // 只是验证了数据的格式  还需要从后台那到数据 查看数据库中的用户名是否有相同的
            var val = $('.user')[0].value
            var  reg = /[0-9]{6}/g
            var  a = reg.test(val)
            $('.sign')[0].classList.remove('vanish')
            if(a){
                $('.ok')[0].classList.remove('vanish')
                $('.remove')[0].classList.add('vanish')
            }else{
                $('.ok')[0].classList.add('vanish')
                $('.remove')[0].classList.remove('vanish')
            }

            // 验证数据库中是否有相同的用户名
            var xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function(){
                if(xhr.status == 200 && xhr.readyState == 4){
                    console.log(xhr.responseText)
                    var data = JSON.parse(xhr.responseText)
                    var code = data.code
                    if(code == -1){
                        $('.ok')[0].classList.add('vanish')
                        $('.remove')[0].classList.remove('vanish')
                        $('.remove')[0].innerHTML = data.msg
                    }else if(code == 0){
                        $('.ok')[0].classList.remove('vanish')
                        $('.remove')[0].classList.add('vanish')
                    }
                }
            }
            xhr.open('get',`http://localhost:3000/verify?username=${val}`)
            xhr.send(null)
            break

        case "pswone":
            var val = $('.pswone')[0].value
            $('.sign')[1].classList.remove('vanish')
            if(val.length >= 6){
                $('.ok')[1].classList.remove('vanish')
                $('.remove')[1].classList.add('vanish')
            }else{
                $('.ok')[1].classList.add('vanish')
                $('.remove')[1].classList.remove('vanish')
            }
            break

        case "pswtwo":
            var val = $('.pswtwo')[0].value
            var val1 = $('.pswone')[0].value
            $('.sign')[2].classList.remove('vanish')
            if(val === val1){
                $('.ok')[2].classList.remove('vanish')
                $('.remove')[2].classList.add('vanish')
            }else{
                $('.ok')[2].classList.add('vanish')
                $('.remove')[2].classList.remove('vanish')
            }
            break

        case "mail":
            var val = $('.mail')[0].value
            var reg = /\d{6,12}@qq.com/
            var a = reg.test(val)
            $('.sign')[3].classList.remove('vanish')
            if(a){
                $('.ok')[3].classList.remove('vanish')
                $('.remove')[3].classList.add('vanish')
            }else{
                $('.ok')[3].classList.add('vanish')
                $('.remove')[3].classList.remove('vanish')
            }
            break
        
        case "code":
            // 验证验证码是否有效
            $('.verify-mail .sign')[0].classList.remove('vanish')
            if($('.verfiy-code')[0].value == localStorage.getItem("verify")){
                $('.verify-mail .ok')[0].classList.remove('vanish')
                $('.verify-mail .remove')[0].classList.add('vanish')
            }else{
                $('.verify-mail .ok')[0].classList.add('vanish')
                $('.verify-mail .remove')[0].classList.remove('vanish')
                console.log('fail')
            }
    }
}

// 发送邮箱验证请求
$('.go')[0].addEventListener('click',()=>{
    var val = $('.mail')[0].value
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText)
            var data = JSON.parse(xhr.responseText)
            let num = data.data
            localStorage.setItem('verify',num)
        }
    }
    xhr.open('get',`http://localhost:3000/loginmail?mail=${val}`)
    xhr.send(null)
})





// 发送注册请求
$('.but-login')[0].addEventListener('click',function(){

    // 拿到用户注册的账号和密码
    var username = $('.user')[0].value
    var psw = $('.pswone')[0].value
    var mail = $('.mail')[0].value

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText)
            var data = JSON.parse(xhr.responseText)
            if(data.code == 0){
                localStorage.setItem('username',username)
                $('.cover')[0].classList.add('vanish')
                $('.model')[0].classList.add('vanish')
            }
        }
    }
    xhr.open('get',`http://localhost:3000/login?username=${username}&&psw=${psw}&&mail=${mail}`)
    xhr.send(null)
})


// 打开登陆框
$('.landing')[0].addEventListener('click',()=>{

    $('.model')[0].childNodes[1].innerHTML = '登陆'

    // 打开遮罩层
    $('.cover')[0].classList.remove('vanish')
    $('.model')[0].classList.remove('vanish')

    // 隐藏注册的界面
    $('.model .input')[0].classList.add('vanish')

    // 显示自己的界面
    $('.model .in')[0].classList.remove('vanish')
})

// 发送登陆请求
$('.but-landing')[0].addEventListener('click',function(){

    // 获取账号密码
    var username = $('.use')[0].value
    var psw = $('.psw')[0].value

    // console.log(username,psw)
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText)
            var data = JSON.parse(xhr.responseText)
            $('.in .text')[0].innerHTML = data.msg
            if(data.code == 0){
                localStorage.setItem('username',username)
                localStorage.setItem('token',data.data)
                setTimeout(()=>{
                    $('.cover')[0].classList.add('vanish')
                    $('.model')[0].classList.add('vanish')
                },500)
            }
        }
    }
    xhr.open('get',`http://localhost:3000/landing?username=${username}&&psw=${psw}`)
    xhr.send(null)
})