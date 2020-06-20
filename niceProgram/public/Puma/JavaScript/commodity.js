var $ = (selector) => {
    return document.querySelector.call(document, selector)
}

let program_delete = document.querySelector('.program_delete')
let header_title = document.querySelector('.header_title')
program_delete.onclick = function () {
    header_title.remove()
}
class Card {

    constructor({ dom, data, imgs }) {

        this.dom = dom,
            this.data = data,
            this.imgs = imgs
        // this.node=node
        this.init()
        this.initText()
        this.Loading()

    }

    init() { // 初始化dom节点的方法
        let div = this.div = document.createElement("div")
        div.classList.add("col-sm-4", "col-md-3", "col-xs-6", "item")
        let thu = document.createElement("div")
        thu.classList.add("thumbnail")
        div.appendChild(thu)
        let img = this.img = document.createElement("img")

        thu.appendChild(img)
        let con = this.con = document.createElement("div")
        con.classList.add("caption")
        let h3 = this.h3 = document.createElement("h3")
        let p = this.p = document.createElement("p")
        let span = this.span = document.createElement("span")
        let p1 = this.p1 = document.createElement('p')
        let a = this.a = document.createElement('a')
        a.classList.add("btn", "btn-primary")
        p1.appendChild(a)
        con.appendChild(h3)
        con.appendChild(p)
        con.appendChild(span)
        con.appendChild(p1)
        thu.appendChild(con)
        this.dom.appendChild(div)

    }

    initText() { //初始化文本

        this.img.setAttribute('data-src', this.data.src);
        this.img.src = this.imgs,
            this.h3.innerHTML = this.data.des
        this.p.innerHTML = this.data.title
        this.span.innerHTML = this.data.price
        this.a.innerHTML = '查看详情'
        
        this.div.setAttribute('par', `${this.data._id}`)
        // console.log(this.div.getAttribute('par'));
        
        // console.log(this.data.img);
        this.a.setAttribute('href', `http://localhost:3000/shangpingXQ.html?par=${this.div.getAttribute('par')}`);

    }

    Loading() {



    }

}

let xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText)
        console.log(data);
        
        let src = 'http://i.serengeseba.com/uploads/i_1_3988611699x577627676_26.jpg';
        for (var i = 0; i < data.docs.length; i++) {
            new Card({ dom: $(".row"), data: data.docs[i], imgs: src })
        }
        var imgs = document.querySelectorAll('.thumbnail>img');
        lazyLoad(imgs)
        window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
            lazyLoad(imgs);
        }
        paging()

    }
}
xhr.open('get', 'http://localhost:3000/Puma/aaa')
xhr.send(null)

//offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getTop(e) {
    var T = e.offsetTop;
    while (e = e.offsetParent) {
        T += e.offsetTop;
    }
    return T;
}

function lazyLoad(imgs) {
    var H = document.documentElement.clientHeight;//获取可视区域高度
    var S = document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < imgs.length; i++) {
        if (H + S - 150 > getTop(imgs[i])) {
            imgs[i].src = imgs[i].getAttribute('data-src');
        }
    }
}


var item = document.querySelectorAll(".pagination>li")
var pagination = document.querySelector(".pagination")

function paging() {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText)
            var datay = Math.ceil(data.docs.length / 20)+1
            var fff = document.createDocumentFragment()
            for (i = 0; i < datay; i++) {
                var li = document.createElement("li")
                var a = document.createElement("a")
                a.innerHTML = `${i + 1}`
                li.appendChild(a)
                li.classList.add("item")
                fff.appendChild(li)
            }
            pagination.insertBefore(fff, item[0].nextSibling)
        }
    }
    xhr.open('get', 'http://localhost:3000/Puma/paging')
    xhr.send(null)
}


pagination.addEventListener('click', (e) => {

    if (e.target.nodeName == "A") {

        var index = e.target.innerText - 1
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (req, res) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data.length);

                $(".row").innerHTML=``;
                
                let src = 'http://i.serengeseba.com/uploads/i_1_3988611699x577627676_26.jpg';
                for (var i = 0; i < data.length; i++) {
                    new Card({ dom: $(".row"), data: data[i], imgs: src })
                }
                var imgs = document.querySelectorAll('.thumbnail>img');
                lazyLoad(imgs)
                window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
                    lazyLoad(imgs);
                }


            }
        }
        xhr.open('get', 'http://localhost:3000/Puma/pagingpag?index='+index);
        xhr.send(null);

    }
})

