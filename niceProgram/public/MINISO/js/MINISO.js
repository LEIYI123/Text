
var liuti=document.querySelector('.liut')
var sliuti=document.querySelector('.sliuti')
var itemUl=document.querySelector('.itmes')
var itme=document.querySelectorAll('.itmes .item')
// console.log(itme,itemUl);

for(var i=0;i<itme.length;i++){
	itme[i].setAttribute('index',i);
	// console.log(itme[i]);
}

sliuti.style.left=0+'px'
itemUl.addEventListener('mouseover',(event)=>{
	if(event.target.tagName=='LI'&&event.target.getAttribute('index')){
		// console.log(event.target.getAttribute('index'));
		var index=event.target.getAttribute('index')
			sliuti.style.left=85*index+'px'
			for(let i=0;i<itme.length;i++){
				itme[i].style.color="black"
				itme[index].style.color="#D10709"
				// console.log(itme[i].style.color,i,itme[index].style.color);
			}
			// console.log(sliuti.style.left)
	}
})

itemUl.addEventListener('mouseleave',(event)=>{
	if(sliuti.style.left!=0+'px'){
		sliuti.style.left=0+'px'
		itme[0].style.color="#D10709"
		for(i=1;i<itme.length;i++){
			itme[i].style.color="black"
		}
	}
})



// 产品展示
var tjxx1=document.querySelectorAll('.tjxx1')
var none=document.querySelectorAll('.none')
var productboxs=document.querySelectorAll('.productbox')

tjxx1.forEach((val,index)=>{
	val.setAttribute('index',index);
	val.addEventListener('mouseenter',(event)=>{
		// console.log(val.children.length);
		var index=parseInt(val.getAttribute('index'));
		for(var i=0;i<productboxs.length;i++){
			productboxs[i].style.display='none';
			if(index<4){
				productboxs[index].style.display='block'
			}
		}
		
		for(var i=0;i<val.children.length;i++){
			// console.log(val.children[i]);
			if(val.children[i].className=='tjwz'){
				// console.log(val.children[i]);
			}
		}
		if(val.firstElementChild.firstElementChild){
			// console.log(val.firstElementChild.firstElementChild);
			for(var i=0;i<tjxx1.length;i++){
				
				if(tjxx1[i].firstElementChild.firstElementChild){
					tjxx1[i].firstElementChild.firstElementChild.style.display='block';
					// console.log(tjxx1[i].parentNode.parentNode);
				}
				val.firstElementChild.firstElementChild.style.display='none'
			}
		}
		
	})
})




window.onload  = function(){  
    var top=document.querySelector('.top')  
    top.onclick = function(){               
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;  
       var time=setInterval(()=>{
		   console.log(document.documentElement.scrollTop,document.body.scrollTop);
		    document.documentElement.scrollTop -=10;
			if(document.documentElement.scrollTop<=0){
			clearInterval(time)
			}
	   },1)
	   
    }
} 




// 轮播
var slb=document.querySelector('.slb')
var zuo=document.querySelector('.zuo')
var you=document.querySelector('.you')
zuo.onclick=function(event){
	event.preventDefault()
	if(slb.style.left==''){
		slb.style.left='0px'
	}
	
	if(slb.style.left==-7200+'px'){
		slb.style.transition='0s'
		slb.style.left='0px';
		setTimeout(()=>{
			slb.style.transition='1s'
			slb.style.left=-1200+'px'
		},200)
		
	}else{
		slb.style.transition='1s'
		slb.style.left=parseInt(slb.style.left)-1200+'px'
	}
}


you.onclick=function(event){
	event.preventDefault()
	// slb.style.left=1200+'px'
	
	
	if(slb.style.left==''){
		slb.style.left='0px'
	}
	
	if(slb.style.left==0+'px'){
		slb.style.transition='0s'
		slb.style.left=-7200+'px';
		setTimeout(()=>{
			slb.style.transition='1s'
			slb.style.left=-6000+'px'
		},200)
		
	}else{
		slb.style.transition='1s'
		slb.style.left=parseInt(slb.style.left)+1200+'px'
	}
	console.log(slb.style.left)
}

var img=document.querySelectorAll('.productcp')
var bt=document.querySelectorAll('.productbt')
var sj=document.querySelectorAll('.productjs')

window.onload=function(){
	var xhr=new XMLHttpRequest()
	xhr.onreadystatechange=function(req,res){
		if(xhr.readyState==4&&xhr.status==200){
			var data=xhr.responseText
			data=JSON.parse(data)
			console.log(data)
			data.forEach((val,index)=>{
				// console.log(val);
				
				if(index<16){
					img[index].src=val.src
					// console.log(img[index].src,val.src);
					bt[index].innerHTML=val.title
					sj[index].innerHTML=val.describe
				}
				// img[index].src=val[index].src
			})
		}
	}
	xhr.open('get','minisooo')
	xhr.send(null)
}






