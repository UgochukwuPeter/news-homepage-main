const open = document.querySelector(".open_icon");
const close = document.querySelector(".close_icon");
const menu = document.querySelector(".h_left");

open.onclick = function(){
menu.style.display = "block";
}
close.onclick = function(){
    menu.style.display = "none";
}