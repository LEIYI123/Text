let carousel = document.querySelector('.carousel .pic li')
const oUL = document.querySelector('.carousel .pic')
const oLi = document.querySelectorAll('.carousel .pic ul>li')
let arr = ['xtep轮播', 'xtep轮播1', 'xtep轮播2', 'xtep轮播3', 'xtep轮播4']
let index = 0;
let fn = function () {
    carousel.innerHTML = `<img src="images/${arr[index]}.jpg" alt="">`
    oLi.forEach((li, key) => {
        if (li.classList.contains('back')) {
            li.classList.remove('back')
        }
    })
    oLi[index].classList.add('back')
    index += 1;
    if (index == 5) {
        index = 0
    }
}
var t1 = setInterval(fn, 4000);
for (let i = 0; i < oLi.length; i++) {
    oLi[i].onclick = function () {
        carousel.innerHTML = `<img src="images/${arr[i]}.jpg" alt="">`
        oLi.forEach((li, key) => {
            if (li.classList.contains('back')) {
                li.classList.remove('back')
            }
        })
        oLi[i].classList.add('back')
    }
}
oUL.onmouseover = function () {
    clearInterval(t1)
}
oUL.onmouseout = function () {
    t1 = setInterval(fn, 4000);
}
let Arr = ['images/jingtian.jpg',
    'images/lehuaqizi.jpg',
    'images/linshuhao1.jpg',
    'images/wangdongcheng.jpg',
    'images/xietingfeng.jpg',
    'images/jingtian.jpg',
    'images/lehuaqizi.jpg',
    'images/linshuhao1.jpg',
    'images/wangdongcheng.jpg',
    'images/xietingfeng.jpg']
const ul = document.querySelector('.slide ul')
class Slide {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
        this.init()
    }
    init() {
        for (let i = 0; i < this.data.length; i++) {
            this.parent.innerHTML += `<li><img src="${this.data[i]}" alt=""></li>`
        }
        this.item = 0
        let f1 = () => {
            this.item -= 1;
            if (this.item <= -2070) {
                this.item = 0
            }
            this.parent.style.marginLeft = this.item + 'px'
        }
        var t2 = setInterval(f1, 10);
        this.parent.onmouseover = function () {
            clearInterval(t2)
        }
        this.parent.onmouseout = function () {
            t2 = setInterval(f1, 10);
        }
    }
}

new Slide(ul, Arr)

let top1 = document.querySelector('.fixedtool .txtright .right_top')
top1.onclick = function () {
    window.scrollTo(0, 0);
}


let btn = document.querySelector('.logo .form button')
let input = document.querySelector('.logo .form input')
btn.onclick = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            if (data.code == 1) {
                window.open("http://localhost:3000/Puma/commodity.html")
            }
        }
    }
    xhr.open('get', 'xept.ajs?type=' + input.value);
    xhr.send(null)
}

let li = document.querySelectorAll('.collapse .fign li')
// console.dir(li[1])
for(let i=1;i<li.length;i++){
    li[i].onclick = function(){
        var a =  document.querySelectorAll('.collapse .fign a')
        a[i].href = '/Puma/commodity.html?gender='+this.innerText+'&&type=xetp'
    }
}

let div = document.querySelectorAll('.one')
for(let j=0;j<div.length;j++){
    div[j].onclick = function(){
        var src = this.children[0].children[0].src
        var A = document.querySelectorAll('.one a')
        let xhrs = new XMLHttpRequest();
        xhrs.onreadystatechange = function(){
            if(xhrs.readyState == 4 && xhrs.status == 200){
                let data = JSON.parse(xhrs.responseText)
                A[j].href = '/shangpingXQ.html?_id='+ data.docs[0]._id
                A[j].click()
            }
        }
        xhrs.open('get','xaqin.jps?img='+ src)
        xhrs.send(null)
    }
}



