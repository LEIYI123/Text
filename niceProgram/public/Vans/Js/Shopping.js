var add = document.querySelectorAll('.add span')
var num = document.querySelector('.number h4')
var tit = document.querySelector('.tips')
var titsp = document.querySelectorAll('.tips span')
var del = document.querySelector('.delete')
var choose = document.querySelector('#choose')
var total = document.querySelector('#total')

// console.log(choose);

// console.log(del);


num.innerHTML = '1'
add[1].onclick = function () {
    num.innerHTML = '2'
    if (num.innerHTML = '2') {
        tit.classList.remove('none')
    }
}
titsp[1].onclick = function () {
    tit.classList.add('none')
}
add[0].onclick = function () {
    num.innerHTML = '1'
    tit.classList.add('none')
}

window.onload = function () {
    var username = localStorage.getItem('username')
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText)
        }
    }
    xhr.open('get', 'http://localhost:3000/shopping/car?username='+username);
    xhr.send(null);
}

del.onclick = function(){
    choose.remove()
    total.remove()
}

$('.all-choose')[0].onclick = function(){
    if($('.all-choose')[0].checked){
        // console.dir($('.all-choose')[0])
        for(var i = 0; i < $('.choose-in').length;i++){
            $('.choose-in')[i].checked = true
        }
    }else{
        for(var i = 0; i < $('.choose-in').length;i++){
            $('.choose-in')[i].checked = false
        }
    }
}