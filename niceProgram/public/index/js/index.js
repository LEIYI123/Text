window.onload = function(){
    if(!localStorage.getItem('token')){
        setTimeout(function(){
            $('.hint')[0].classList.remove('vanish')
        },1000)
    }else{
        $('.hint')[0].classList.add('vanish')
        $('.landing')[0].childNodes[1].innerHTML = '你好'                    
        var username = localStorage.getItem('username')
        $('.login')[0].childNodes[1].innerHTML =  username
    }
    
}

$('.hint .close')[0].addEventListener('click',()=>{
    $('.hint')[0].classList.add('vanish')
})

$('.fashion')[0].addEventListener('mouseover',()=>{
    $('.fashion-icon')[0].classList.add('rotate')
    $('.kinds')[0].classList.remove('vanish')
})

$('.fashion')[0].addEventListener('mouseout',()=>{
    $('.fashion-icon')[0].classList.remove('rotate')
    $('.kinds')[0].classList.add('vanish')
})

// 防抖函数
function debounce(fn,delay){
    var timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        var arg = arguments[0]
        timer = setTimeout(function(){
            fn(arg)
        },delay)
    }
}
function lunbo(){
     // 获取图片的宽度

     let pic = $('.pic .box img')[0]

     let picWidth = pic.getBoundingClientRect()

     let defaultWidth = parseInt(picWidth.width)



    let picList = $('.banner .pic .box')
    for(let i = 0;i < picList.length;i++){
        picList[i].style.left = (i - 2) * defaultWidth + 'px'
    }

    function right(){
        for(let i = 0;i < picList.length;i++){
            if(picList[i].offsetLeft <= -defaultWidth * 3){
                picList[i].classList.add('vanish')
                picList[i].style.left = defaultWidth * 3 + 'px'
                setTimeout(()=>{
                    for(let o = 0;o < picList.length;o++){
                        if(picList[o].classList.contains('vanish')){
                            picList[o].classList.remove('vanish')
                        }
                    }
                },500)
            }
            let left = parseInt(picList[i].style.left)
            picList[i].style.left = left - defaultWidth + 'px'
        }
    }
    $('.right')[0].addEventListener('click',debounce(right,500))
    function left(){

        for(let i = 0;i < picList.length;i++){
            if(picList[i].offsetLeft == defaultWidth * 3){
                picList[i].classList.add('vanish')
                picList[i].style.left = -defaultWidth * 3 + 'px'
                setTimeout(()=>{
                    for(let o = 0;o < picList.length;o++){
                        if(picList[o].classList.contains('vanish')){
                            picList[o].classList.remove('vanish')
                        }
                    }
                },500)
            }


            let left = parseInt(picList[i].style.left)
            picList[i].style.left = left + defaultWidth + 'px'
        }
    }
    $('.left')[0].addEventListener('click',debounce(left,500))

    
}
lunbo()




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
            if(data.code == 0){
                let num = data.data
                localStorage.setItem('verify',num)
            }
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
                // speak('注册成功')
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
// 获取账号密码  登陆框的



// 发送登陆请求
$('.but-landing')[0].addEventListener('click',function(username,psw){


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

                    $('.landing')[0].childNodes[1].innerHTML = '你好'                    

                    $('.login')[0].childNodes[1].innerHTML = username 

                    // speak('登陆成功')
                },500)
            }
        }
    }
    xhr.open('get',`http://localhost:3000/landing?username=${username}&&psw=${psw}`)
    xhr.send(null)
})







// 跳转到社区交友
$('.friends')[0].addEventListener('click',()=>{
    if(!localStorage.getItem('token')){
        setTimeout(function(){
            $('.hint')[0].classList.remove('vanish')
        },500)
    }else{
        window.open('http://localhost:3000/Community.html')
    }
})


// 跳转到购物车
$('.goods-car')[0].addEventListener('click',()=>{
    if(!localStorage.getItem('token')){
        setTimeout(function(){
            $('.hint')[0].classList.remove('vanish')
        },500)
    }else{
        window.open('http://localhost:3000/Vans/Shopping.html')
    }
})

// 跳转到个人中心
$('.self')[0].addEventListener('click',()=>{
    if(!localStorage.getItem('token')){
        setTimeout(function(){
            $('.hint')[0].classList.remove('vanish')
        },500)
    }else{
        // 路径没有
        window.open('http://localhost:3000/personal/personal.html')
    }
})

// 关于vans的点击
for(var i = 0;i < $('.case').length;i++){
    $('.case')[i].addEventListener('click',function(){
        if(!localStorage.getItem('token')){
            setTimeout(function(){
                $('.hint')[0].classList.remove('vanish')
            },500)
        }else{
            window.open('http://localhost:3000/Vans/Vans.html')
        }
    })
}

// 艺术家联盟的点击
for(var i = 0;i < $('.group').length;i++){
    $('.group')[i].addEventListener('click',function(){
        if(!localStorage.getItem('token')){
            setTimeout(function(){
                $('.hint')[0].classList.remove('vanish')
            },500)
        }else{
            window.open('http://localhost:3000/Vans/Vans.html')
        }
    })
}


// 夏日精品的点击
for(var i = 0;i < $('.group').length;i++){
    $('.group')[i].addEventListener('click',function(){
        if(!localStorage.getItem('token')){
            setTimeout(function(){
                $('.hint')[0].classList.remove('vanish')
            },500)
        }else{
            window.open('http://localhost:3000/Adidas/Adidas_index.html')
        }
    })
}

// 联系我们的遮罩层显示
$('.help')[0].addEventListener('click',function(){
    $('.cover-box-email')[0].classList.remove('vanish')
})

// 联系我们的遮罩层隐藏
$('.cover-box-email  .close')[0].addEventListener('click',function(){
    $('.cover-box-email')[0].classList.add('vanish')
})

// 发送建议邮件的请求 
$('.but-sug')[0].addEventListener('click',function(){

    var val = $('.suggest')[0].value

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText)

            if(data.code == 0){
                $('.coer-email .text')[0].innerHTML = '你的建议 我们已经收到 并会即使给你反馈 感谢你的建议'
            }
        }
    }
    xhr.open('get',`http://localhost:3000/suggest?suggest=${val}`)
    xhr.send(null)
})




// 让浏览器发声的函数
function speak(sentence){
    const utterance = new SpeechSynthesisUtterance(sentence)
    window.speechSynthesis.speak(utterance)
}