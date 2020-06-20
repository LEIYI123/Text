
var imgs = document.querySelector('.main .contain .inner .inner-lunbo .lunbo-img ul')
var dots = document.querySelector('.main .contain .inner .inner-lunbo .lunbo-dot ul')
var str = ['https://image.converse.com.cn/static/kv/pc/earth_tone_suede_kv_pc_200514.jpg', 'http://image.converse.com.cn/static/kv/pc/rokit_kv_pc_200515.jpg', 'http://image.converse.com.cn/static/kv/pc/renew_kv_pc_200501.jpg', 'http://image.converse.com.cn/static/kv/pc/jp_pack_kv_bs_pc_200424.jpg'];
class Lunbo {
    constructor({ imgDiv, dotDiv, imgData }) {
        this.imgDiv = imgDiv;
        this.dotDiv = dotDiv;
        this.imgData = imgData;
        this.index = 0;
        this.time = 2000;
        this.initImg();
        this.initDot();
        this.dotChange();
        this.wufeng()
    }
    initImg() {
        var cache = document.createDocumentFragment();
        for (var i = 0; i < this.imgData.length; i++) {
            var li = this.li=document.createElement('li');
            var img = document.createElement('img');
            img.src = this.imgData[i]
            li.appendChild(img)
            li.classList.add('item');
            li.setAttribute('index', i);
            cache.appendChild(li);
        }
        this.imgDiv.appendChild(cache);
        this.moveWidth()
        this.imgDiv.style.width = `${this.imgData.length * this.width}%`
    }
    initDot() {
        var cache = document.createDocumentFragment();
        for (var i = 0; i < this.imgData.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('index', i);
            li.classList.add('item');
            cache.appendChild(li);
        }
        this.dotDiv.appendChild(cache);
    }
    moveWidth(){
        this.width = this.li.offsetWidth;
    }
    dotChange() {
        this.dotDiv.children[0].classList.add('current');
        this.imgChange();
        this.dotDiv.addEventListener('click', (event) => {
            if (event.target.tagName.toLowerCase() == 'li') {
                var length = this.imgData.length;
                for (var i = 0; i < length; i++) {
                    this.dotDiv.children[i].classList.remove('current');
                    event.target.classList.add('current');
                    this.index = event.target.getAttribute('index');
                }
            }
            this.imgChange();
        })
    }
    dotGen() {
        var length = this.dotDiv.children.length;
        for (var i = 0; i < length; i++) {
            this.dotDiv.children[i].classList.remove('current');
        }
        if (this.index < length) {
            this.dotDiv.children[this.index].classList.add('current');
        } else {
            this.dotDiv.children[0].classList.add('current');
        }
    }
    imgChange() {
        this.moveWidth();
        if (this.index == 0) {
            this.imgDiv.style.transition = '0s';
        }
        else {
            this.imgDiv.style.transition = '1s';
        }
        this.imgDiv.style.left = -this.index * this.width + 'px';
    }

    zidong() {
        var _that = this;
        this.imgChange();
        var move = this.move = function () {
            if (_that.index < _that.imgData.length) {
                _that.index++;
            }
            if (_that.index == _that.imgData.length) {
                setTimeout(() => {//判断轮播到最后一张时，直接跳转到第一张，但是直接跳转没有过渡效果，增加一个定时器，时间为轮播的时间。当轮播结束后就能直接跳转到第一张。
                    _that.index = 0;
                    _that.imgDiv.style.transition = '0s';
                    _that.imgDiv.style.left = '0px';
                }, 1000)
            }
            _that.imgChange();
            _that.dotGen();
        }
        var timer = this.timer = setInterval(this.move, this.time);
        this.dotDiv.addEventListener('mouseover', (event) => {
            clearInterval(timer);
        })
        this.dotDiv.addEventListener('mouseleave', (event) => {
            timer = setInterval(this.move, this.time);
        })
        this.imgDiv.addEventListener('mouseover', (event) => {
            clearInterval(timer);
        })
        this.imgDiv.addEventListener('mouseleave', (event) => {
            timer = setInterval(this.move, this.time);
        })
    }

    wufeng() {
        var cloneLi = this.imgDiv.children[0].cloneNode(true)
        this.imgDiv.appendChild(cloneLi);
        this.zidong();
    }

}
var lunbo = new Lunbo({
    imgDiv: imgs,
    dotDiv: dots,
    imgData: str
})

var navHeader = document.querySelector('.main .contain .head .header2 ul li .header3');
var tab = document.querySelector('.main .contain .head .header2 .tab .tab-item');
tab.addEventListener('mouseover', () => {
    navHeader.style.display = 'block';
})
tab.addEventListener('mouseleave', () => {
    setTimeout(() => {
        navHeader.style.display = 'none';
    }, 1000);
})

var items = document.querySelectorAll('.main .contain .inner .qushi .qushi-inner .item');
var zhezhao = document.querySelectorAll('.main .contain .inner .qushi .qushi-inner .item .zhezhao');

items.forEach((val) => {
    val.addEventListener('mouseover', () => {
        val.firstElementChild.style.display = 'block';
    })
    val.addEventListener('mouseleave', () => {
        val.firstElementChild.style.display = 'none';
    })
})

var left = document.querySelector('.main .contain .inner .jingxuan .jingxuan-inner .left');
var leftZheZhao = document.querySelector('.main .contain .inner .jingxuan .jingxuan-inner .left .zhezhao');
left.addEventListener('mouseover', () => {
    leftZheZhao.style.left = '0px';
})
left.addEventListener('mouseleave', () => {
    leftZheZhao.style.left = '-50px';
})
var right = document.querySelector('.main .contain .inner .jingxuan .jingxuan-inner .right');
var rightZheZhao = document.querySelector('.main .contain .inner .jingxuan .jingxuan-inner .right .zhezhao');
right.addEventListener('mouseover', () => {
    rightZheZhao.style.left = '0px';
})
right.addEventListener('mouseleave', () => {
    rightZheZhao.style.left = '-50px';
})

var headLine = document.querySelectorAll('.main .contain .head .header2 .tab .tab-item')
var header2 = document.querySelector('.main .contain .head .header2 .lines')

class Line {
    constructor(dom, domnav) {
        this.dom = dom;
        this.domnav = domnav;
        this.render();
        this.move();
    }
    render() {
        var line = this.line = document.createElement('div');
        line.classList.add('line');
        this.domnav.appendChild(line);
        this.width = this.line.offsetWidth;
    }
    move() {
        for (var i = 0; i < this.dom.length; i++) {
            this.dom[i].setAttribute('index', i)
        }
        this.dom.forEach((val) => {
            this.line.style.left='0px';
            val.addEventListener('mouseenter', () => {
                this.line.style.width=this.width + 'px';
                var left=parseInt(this.line.style.left);
                this.index = parseInt(val.getAttribute('index'))+1;
                if(this.width * this.index-left>0){
                    this.line.style.width = this.width * this.index-left + 'px';
                    setTimeout(() => {
                    this.line.style.width = this.width + 'px';
                    this.line.style.left = this.width * (this.index-1) + 'px';
                    }, 600);
                }else{
                    this.line.style.left = this.width * (this.index-1) + 'px';
                    this.line.style.width = left-this.width * (this.index-2) + 'px';
                    setTimeout(() => {
                    this.line.style.width = this.width + 'px';
                    }, 600);
                }
            })
        })
    }
}
var line = new Line(headLine, header2)


// 请求部分
var fenyeItem=document.querySelectorAll('.main .contain .inner .remen .fenye ul .item')
var remenItem=document.querySelectorAll('.main .contain .inner .remen .remen-inner .remen-item')
fenyeItem.forEach((val)=>{
    val.addEventListener('click',()=>{
        for(var i=0;i<fenyeItem.length;i++){
            fenyeItem[i].classList.remove('current');
            fenyeItem[i].setAttribute('index',i);
            val.classList.add('current');
        }
        var num=parseInt(val.getAttribute('index'))
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(req,res){
            if(xhr.readyState==4&&xhr.status==200){
                var data=xhr.responseText;
                data=JSON.parse(data);
                remenItem.forEach((val,index)=>{
                    val.firstElementChild.src=data[index].src;
                    val.children[1].children[0].innerHTML=data[index].title;
                    val.children[1].children[0].title=data[index].title;
                    val.children[2].children[0].innerHTML=data[index].price;
                    val.setAttribute('id',data[index]._id);
                })
            }
        }
        xhr.open('get','/converseOne/converseTwo?num='+num);
        xhr.send(null);
    })
})

let remenItems=document.querySelectorAll('.main .contain .inner .remen .remen-inner .remen-item');
remenItem.forEach((val)=>{
    val.addEventListener('click',()=>{
        let src=val.getAttribute('id');
        window.open('./../../shangpingXQ.html?id='+src)
    })
})

