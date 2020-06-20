var tops = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .lunbo .top')
var inner = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .lunbo .inner')
var down = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .lunbo .down')

tops.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault()
    if (inner.style.top == '') {
        inner.style.top = '0px';
    }
    var top = parseInt(inner.style.top);
    var length = inner.children.length;
    if (-top <= (length - 9) * 55) {
        inner.style.top = top - 55 + 'px';
    }
})
down.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault()
    if (inner.style.top == '') {
        inner.style.top = '0px';
    }
    var top = parseInt(inner.style.top);
    if (top <= 0) {
        inner.style.top = top + 55 + 'px';
    }
})
var xiaotu = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .metail .xiaotu');
var box = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .metail .xiaotu .box');
var datu = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .metail .datu')
xiaotu.addEventListener('mousemove', (event) => {
    box.style.display = 'block';
    datu.style.display = 'block';

    e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;//分别兼容ie和chrome
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || (e.clientX + scrollX);//兼容火狐和其他浏览器
    var y = e.pageY || (e.clientY + scrollY);

    var widthB = box.parentElement.offsetWidth - box.offsetWidth; //小盒子宽度
    var heightB = box.parentElement.offsetHeight - box.offsetHeight; //小盒子高度
    var xiaotoW = xiaotu.parentElement.offsetLeft; //小盒子距离浏览器左侧的距离
    var xiaotoT = xiaotu.parentElement.offsetTop; //小盒子距离浏览器上边的距离
    var left = x - xiaotoW;
    var top = y - xiaotoT;
    var widthA = datu.offsetWidth; //小图盒子宽度
    var heightA = datu.offsetHeight; //小图盒子高度

    var left1 = -700 * left / 500 + 'px';
    var top1 = -700 * top / 500 + 'px';
    // console.log(left1,top1);

    if (box.style.left == '' || box.style.top == '0px') {
        box.style.left = '0px';
        box.style.top = '0px'
    }
    if (left <= widthB && left > 0) {
        box.style.left = left + 'px';
        datu.style.backgroundPositionX = left1;
    }
    if (top <= heightB && top > 0) {
        box.style.top = top + 'px';
        datu.style.backgroundPositionY = top1;
    }
})

xiaotu.addEventListener('mouseleave', () => {
    box.style.display = 'none';
    datu.style.display = 'none';
})
var chooseBuy = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .choose-buy')
var chooseCar = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .choose-car')
chooseBuy.addEventListener('mouseenter', () => {
    chooseBuy.style.backgroundColor = 'black';
    chooseBuy.style.color = 'white';
})
chooseBuy.addEventListener('mouseleave', () => {
    chooseBuy.style.backgroundColor = 'white';
    chooseBuy.style.color = 'black';
})
chooseCar.addEventListener('mouseenter', () => {
    chooseCar.style.backgroundColor = 'black';
    chooseCar.style.color = 'white';
})
chooseCar.addEventListener('mouseleave', () => {
    chooseCar.style.backgroundColor = 'white';
    chooseCar.style.color = 'black';
})

var shangpingID = window.location.href.split("?")[1].split("=")[1];
var xiaotu = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .metail .xiaotu img')
var datu = document.querySelector('.main .contain .inner .xiangqing .xiangqing-left .metail .datu')
var itemColor = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .goods-color ul #itemColor a img')
var title = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .goods-title p')
var headers = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right h3')
var price = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .goods-price')
console.log(shangpingID);
window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (req, res) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dat = JSON.parse(xhr.responseText);
            xiaotu.src = dat[0].src;
            datu.style.backgroundImage = `url(${dat[0].src})`;
            itemColor.src = dat[0].src;
            title.innerHTML = dat[0].des;
            headers.innerHTML = dat[0].title;
            price.innerHTML = `￥${dat[0].price}`;
        }
    }
    xhr.open('get', '/shangpinqq/shangpingXQ?id=' + shangpingID);
    xhr.send(null)
}

var shoucang = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .choose-car');
var goumai = document.querySelector('.main .contain .inner .xiangqing .xiangqing-right .choose-buy');
let username = localStorage.getItem('username');

shoucang.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (req, res) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            if (data.length > 0) {
                data = JSON.parse(data);
            }
            console.log(data);
            let str = [];
            data.forEach((element, index) => {
                str.push(element.id)
            });
            console.log(!str.includes(shangpingID), shangpingID);

            // console.log(!str.includes(shangpingID));
            if (!str.includes(shangpingID)) {
                var xhrs = new XMLHttpRequest();
                xhrs.onreadystatechange = function (req, res) {
                    if (xhrs.readyState == 4 && xhrs.status == 200) {
                        var data = xhrs.responseText;
                        console.log(data);
                    }
                }
                xhrs.open('get', '/shangpinqq/creatNum?id=' + shangpingID + '&&username=' + username)
                xhrs.send(null)
            }else{
                console.log('已经存在');
            }
        }
    }
    xhr.open('get', '/shangpinqq/shoucang?id=' + shangpingID + '&&username=' + username);
    xhr.send()
}

goumai.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (req, res) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            if (data.length > 0) {
                data = JSON.parse(data);
            }
            console.log(data);
            let str = [];
            data.forEach((element, index) => {
                str.push(element.id)
            });
            console.log(str.includes(shangpingID));
            if (!str.includes(shangpingID)) {
                console.log(11111);
                var xhrs = new XMLHttpRequest();
                xhrs.onreadystatechange = function (req, res) {
                    if (xhrs.readyState == 4 && xhrs.status == 200) {
                        var data = xhrs.responseText;
                        console.log(data);
                    }
                }
                xhrs.open('get', '/shangpinqq/creatShopping?id=' + shangpingID + '&&username=' + username)
                xhrs.send()
            } else {
                console.log('已经存在');
            }
        }
    }
    xhr.open('get', '/shangpinqq/goumai?id=' + shangpingID + '&&username=' + username);
    xhr.send(null)
}





