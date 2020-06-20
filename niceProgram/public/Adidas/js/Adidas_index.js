let header_right_theInput=document.querySelector('.header_right_theInput')
let header_bottom_delete=document.querySelector('.header_bottom_delete')

// 光标移入出现删除内容按钮
header_right_theInput.onfocus=function(){
    header_bottom_delete.style.display='block'
}   
// 清空输入框里的 内容
header_bottom_delete.onclick=function(){
   header_right_theInput.value=''
    header_bottom_delete.style.display='none'
}


//点击删除我们网站的logo
let program_delete=document.querySelector('.program_delete')
let header_title=document.querySelector('.header_title')
let header_under=document.querySelector('.header_under')
program_delete.onclick=function(){
    header_title.remove()
    header_under.style.height='96px '

}

let header_i_hover = document.querySelectorAll('.header_left_pu')
let header_left_pu_i=document.querySelectorAll('.header_left_pu_i')
let header_hover=document.querySelector('.header_hover')
for(let i=0;i<header_left_pu_i.length;i++){
    header_i_hover[i].onmouseenter=function(){
        header_left_pu_i[i].style.display='block' 
    }
    header_i_hover[i].onmouseout=function(){
        header_left_pu_i[i].style.display='none'
    }
}


//实现头部的新闻轮播
let header_ul=document.querySelector('.newsBox_guodu>ul')
class NewsPlay{
    constructor(dom){
        this.dom=dom
        this.init()
    }
    init(){
        let X=0        
        setInterval(()=>{
            
            this.dom.style.transition='1s'
            let Liwidtn=this.dom.parentNode.clientWidth
            
            
            X-=Liwidtn
            this.dom.style.transform=`translateX(${X}px)`
            if(X<=-Liwidtn*2){
                setTimeout(()=>{
                    X=0
                    this.dom.style.transition='0s'
                    this.dom.style.transform=`translateX(0px)`
                },1000)
            }
        },4000)   
    }
}

new NewsPlay(header_ul)


//实现新闻轮播删除的功能
let newBox_delete=document.querySelector('.newBox_delete')
newBox_delete.onclick=function(){
    header_ul.remove()
    newBox_delete.remove()
}



//实现中心轮播的地方
let nav_left = document.querySelector('.nav_lunbo_button_left')
let nav_right = document.querySelector(".nav_lunbo_button_right")
let nav_ul = document.querySelector('.nav_lunbo>ul')
let nav_parent = document.querySelector('.nav_lunbo')
let nav_points=document.querySelectorAll('.nav_points')
class NavPlay{
    constructor(nav_ul,nav_right,nav_left,nav_parent,nav_points){
        this.ul=nav_ul
        this.left=nav_left
        this.right=nav_right
        this.parent=nav_parent
        this.nav_points=nav_points
        this.index=0
        this.setInt=null
        this.init()
        this.render_left()
    }
    init(){
        // 轮播自动播放
        this.setInt=setInterval(()=>{
            this.index=this.index+1
            let clientWidth=this.parent.clientWidth
            this.ul.style.transition='1s'
            this.ul.style.transform=`translateX(-${clientWidth*this.index}px)`
            if(this.index==3){
                this.index=0
                setTimeout(()=>{
                    this.ul.style.transition='0s'
                    this.ul.style.transform=`translateX(0px)`
                },1000)
            }
           this.panduan()
           this.points()    
        },5000)
    }
    render_left(){
       this.left.onclick=()=>{
        clearInterval(this.setInt)
        this.init()
        if(this.index>0){
            this.index--
            let clientWidth=this.parent.clientWidth
            this.ul.style.transition='1s'
            this.ul.style.transform=`translateX(-${clientWidth*this.index}px)`
        }
        this.panduan()
        this.points()
       }
       this.right.onclick=()=>{
        clearInterval(this.setInt)
        if(this.index<2){
            this.index++
            let clientWidth=this.parent.clientWidth
            this.ul.style.transition='1s'
            this.ul.style.transform=`translateX(-${clientWidth*this.index}px)`
        }
        this.panduan()
        this.init()
        this.points()
       }
    }

    panduan(){
        if(this.index==2){
            this.right.classList.add('nav_lunbo_opacity')
        }else{
            this.right.classList.remove('nav_lunbo_opacity')
        }
        if(this.index==0){
            this.left.classList.add('nav_lunbo_opacity')
        }else{
            this.left.classList.remove('nav_lunbo_opacity')
        }
    }

    points(){
        for(let i=0;i<this.nav_points.length;i++){
            this.nav_points[i].classList.remove('nav_points_opacity')
        }
        this.nav_points[this.index].classList.add('nav_points_opacity')
    }

}
new NavPlay(nav_ul,nav_right,nav_left,nav_parent,nav_points)


// 多显示轮播


class HotWeek{
    constructor(hotWeek_ul,HtoLeft,HtoRight,hp_is){
        this.ul=hotWeek_ul
        this.left=HtoLeft
        this.right=HtoRight
        this.i=hp_is
        this.setInt=null
        this.length=this.i.length
        this.index=0
        this.render()
        this.isclick()
    }
    init(){
        this.parent=this.ul.parentNode
        let clientWidth=this.parent.clientWidth
        this.ul.style.transition='1s'
        this.ul.style.transform=`translateX(-${clientWidth*this.index}px)`
    }
    render(){
        this.right.onclick=()=>{
            this.left.classList.remove('hotWeek_opacity')
            
            if(this.index<this.length-1){
                this.index++
                this.init()
            }
            if(this.index==this.length-1){
                this.right.classList.add('hotWeek_opacity')
            }
            this.opints()
        }
        this.left.onclick=()=>{
            this.right.classList.remove('hotWeek_opacity')
            
            if(this.index>0){
                this.index--
                this.init()
            }
            if(this.index==0){
                this.left.classList.add('hotWeek_opacity')
            }
            this.opints()
        }
    }
    opints(){
        for(let i=0;i<this.i.length;i++){
            this.i[i].classList.remove('hp_span_opciaty')
        }
        this.i[this.index].classList.add('hp_span_opciaty')
    }
    isclick(){
        this.i.forEach((i,index)=> {
            this.i[index].onclick=()=>{
                this.index=index
                this.right.classList.remove('hotWeek_opacity')
                this.left.classList.remove('hotWeek_opacity')
                if(this.index==0){
                    this.left.classList.add('hotWeek_opacity')
                    
                }else if(this.index==this.length-1){
                    this.right.classList.add('hotWeek_opacity')
                   
                }
                this.opints()
                this.init()
            }
        });
    }
}
let hotWeek_ul=document.querySelector('.hotWeek_picUl')
let HtoLeft=document.querySelector('.HtoLeft')
let HtoRight=document.querySelector('.HtoRight')
let hp_is=document.querySelectorAll('.hp_span_i')
new HotWeek(hotWeek_ul,HtoLeft,HtoRight,hp_is)


//改版轮播
class TheBestLun{
    constructor(theBest_ul,BtoLeft,BtoRight,tb_i){
        this.ul=theBest_ul
        this.left=BtoLeft
        this.right=BtoRight
        this.i=tb_i
        this.length=this.i.length
        this.index=0
        this.render()
        this.isclick()
    }
    init(){
        this.parent=this.ul.parentNode
        let clientWidth=this.parent.clientWidth
        this.ul.style.transition='1s'
        this.ul.style.transform=`translateX(-${clientWidth*this.index}px)`
    }
    render(){
        this.right.onclick=()=>{
            this.left.classList.remove('theBest_opacity')
            
            if(this.index<this.length-1){
                this.index++
                this.init()
            }
            if(this.index==this.length-1){
                this.right.classList.add('theBest_opacity')
            }
            console.log(this.index,this.length);
            
            this.opints()
        }
        this.left.onclick=()=>{
            this.right.classList.remove('theBest_opacity')
            
            if(this.index>0){
                this.index--
                this.init()
            }
            if(this.index==0){
                this.left.classList.add('theBest_opacity')
            }
            this.opints()
        }
    }
    opints(){
        for(let i=0;i<this.i.length;i++){
            this.i[i].classList.remove('tb_span_opciaty')
        }
        this.i[this.index].classList.add('tb_span_opciaty')
    }
    isclick(){
        this.i.forEach((i,index)=> {
            this.i[index].onclick=()=>{
                this.index=index
                this.right.classList.remove('theBest_opacity')
                this.left.classList.remove('theBest_opacity')
                if(this.index==0){
                    this.left.classList.add('theBest_opacity')
                    
                }else if(this.index==this.length-1){
                    this.right.classList.add('theBest_opacity')
                   
                }
                this.opints()
                this.init()
            }
        });
    }
    otherQing(){
        if(this.length==2){

        }
    }
}

let theBest_ul = document.querySelector('.theBest_Ul')
let BtoLeft = document.querySelector('.BtoLeft')
let BtoRight = document.querySelector('.BtoRight')
let tb_i = document.querySelectorAll('.tb_span_i')
new TheBestLun(theBest_ul,BtoLeft,BtoRight,tb_i)




let Hdelete2 = document.querySelector('.header_bottom_delete2')
let theInput2 =document.querySelector('.header_right_theInput2')
let header_right_logo = document.querySelector('.header_right_logo')
let header_xia = document.querySelector('.header_xia')
Hdelete2.onclick=function(){
    theInput2.value=''
}
header_right_logo.onclick=function(){
    if(header_xia.style.height=='0px'|| header_xia.style.height==''){
        header_xia.style.height='60px'
    }else{
        header_xia.style.height='0px'
    }
}

let header_three1=document.querySelector(".header_three1")
let header_yincang=document.querySelector('.header_yincang')
let header_span=document.querySelectorAll('.header_three2>span')
header_three1.onclick=function(){
    header_yincang.style.transform='translateX(0px)'
    if(!header_span[0].style.transform || header_span[0].style.transform=='rotate(0deg)'){
        header_span[0].style.transform='rotate(40deg)'
        header_span[1].style.width='0'
        header_span[2].style.transform='rotate(-40deg)'
    }
}
let header_three2=document.querySelector('.header_three2')
header_three2.onclick=function(){
    header_yincang.style.transform='translateX(-100%)'
    header_span[0].style.transform='rotate(0deg)'
    header_span[1].style.width='100%'
    header_span[2].style.transform='rotate(0deg)'
}



// 查看商品详情跳转按钮
// let hotWeek_ul=document.querySelector('.hotWeek_picUl')
let hotWeek_li = document.querySelectorAll('.hotWeek_picUl>li>a')
hotWeek_li.forEach((i,index)=>{
    i.onclick=function(event){
        let e=event || window.event
        let target=e.target
        let Tparent = target.parentNode
        
        let theSrc=target.src
        var xhr=new XMLHttpRequest()
        xhr.onreadystatechange=function(){
           if(xhr.status==200 && xhr.readyState==4){
            // 从数据库获取点击商品的_id
            let data=JSON.parse(xhr.responseText)[0]._id
            console.log(data);
            window.open(`./../../shangpingXQ.html?id=${data}`)
           }
        }
        xhr.open('get','/adidas/findId?src='+theSrc)
        xhr.send(null)
    }
})
