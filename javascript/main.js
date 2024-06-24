const menu = document.getElementById("hamburgermenu");
const toggleIcon = document.getElementById("menu-toggle");

toggleIcon.addEventListener("click", function (ev) {
    menu.classList.toggle("active");
});

const mask = document.getElementById("mask");
mask.addEventListener("click",function(){
    menu.classList.remove("active");
})