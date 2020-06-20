let program_delete = document.querySelector('.program_delete')
let header_title = document.querySelector('.header_title')
program_delete.onclick = function () {
    header_title.remove()
}

var Ul = document.querySelector(".classify")
var Li = document.querySelectorAll(".classify>li>div")

Ul.addEventListener("mouseover", () => {

    var e = window.event;
    
    if (e.target.localName == "img" && e.target.parentNode.offsetWidth == 147 || e.target.parentNode.offsetWidth == 146) {

        e.target.parentNode.style.width = 295 + "px"

    }

    for(let i = 0 ; i < Li.length ; i ++){

        if(e.target.parentNode != Li[i]){

            Li[i].style.width = 147 + 'px'

        }

    }   

})

