// 微博移入变红
$('.wechat')[0].addEventListener('mouseover', function () {
    let wechatImg = this.childNodes[1]
    wechatImg.src = './images/wechatred.png'
})
$('.wechat')[0].addEventListener('mouseout', function () {
    let wechatImg = this.childNodes[1]
    wechatImg.src = './images/wechat.png'
})
// sina移入变红
$('.sina')[0].addEventListener('mouseover', function () {
    let wechatImg = this.childNodes[1]
    wechatImg.src = './images/sinared.png'
})
$('.sina')[0].addEventListener('mouseout', function () {
    let wechatImg = this.childNodes[1]
    wechatImg.src = './images/sina.png'
})

// 展开
$('.open')[0].addEventListener('mouseover', () => {
    $('.item')[0].style.height = '304px'
    $('.item')[0].style.borderWidth = '2px'
})
// 收起
$('.open')[0].addEventListener('mouseout', () => {
    $('.item')[0].style.height = '0'
    $('.item')[0].style.borderWidth = '0'
})

// 滚轮事件


// 注意要把滚动条隐藏了再演示
let num = 0

function show(e) {
    let top1 = document.documentElement.scrollTop
    let timer = null
    let height = $('.one')[0].getBoundingClientRect().height
    let flag = null
    if (e.deltaY < 0) {
        flag = false
    } else {
        flag = true
    }

    timer = setInterval(() => {
        if (flag) {
            if (num != 3) {
                document.documentElement.scrollTop += 30
                if (document.documentElement.scrollTop >= height + top1 - 10) {
                    document.documentElement.scrollTop = height + top1
                    num++
                    console.log(num)
                    bgc()
                    clearInterval(timer)
                }
            }else{
                clearInterval(timer)
            }
        }
        if (!flag) {
            if (num != 0) {
                document.documentElement.scrollTop -= 30
                if (document.documentElement.scrollTop <= top1 - height + 10) {
                    document.documentElement.scrollTop = top1 - height
                    num--
                    console.log(num)
                    bgc()
                    clearInterval(timer)
                }
            }else{
                clearInterval(timer)
            }
        }
    }, 16.67)

}

function bgc() {
    for (let i = 0; i < 4; i++) {
        $('.list ul li')[i].classList.remove('choose')
    }
    if (num == 1) {
        $('.third')[0].classList.add('choose')
    } else if (num == 2) {
        $('.second')[0].classList.add('choose')
    } else if (num == 3) {
        $('.first')[0].classList.add('choose')
    } else if (num == 0) {
        $('.fourth')[0].classList.add('choose')
    }
}
bgc()

window.addEventListener('wheel', debounce(show, 500))

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

// // 节流函数
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


// 点击商品详情 跳转到商品详情的页面  渲染整个商品

// $('.gift')[0].addEventListener('click', () => {
//     var xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log(xhr.responseText)
//             var data = JSON.parse(xhr.responseText)
//             var url = data.url
//             // console.log(localStorage.getItem('brands'))
//             if (localStorage.getItem('brand')) {
//                 localStorage.getItem('brand') == 'kappas'
//             } else {
//                 localStorage.setItem('brand', 'kappas')
//             }
//             setTimeout(function () {
//                 window.open(url)
//             }, 500)
//         }
//     }
//     xhr.open('get', 'http://localhost:3000/kappa/gift?brand=kappas')
//     xhr.send(null)
// })