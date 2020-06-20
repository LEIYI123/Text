var chat=document.querySelector('.main .chat');
chat.addEventListener('click',()=>{
    var top=document.documentElement.scrollTop;
    console.log(top);
    var timer=setInterval(() => {
        document.documentElement.scrollTop-=10;
        if(document.documentElement.scrollTop<=0){
            clearInterval(timer)
        }
    }, 10);
})
