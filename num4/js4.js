const open = document.querySelector('.hamburger');
const close = document.querySelector('.closemenu');
const layer = document.querySelector('.layer1');

open.onclick = () =>{
    layer.classList.add('check');
}

close.onclick = () =>{
    layer.classList.remove('check');
}