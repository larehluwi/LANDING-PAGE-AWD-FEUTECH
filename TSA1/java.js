let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

rootEle.classList.add("light-mode");
toggleBtn.children[1].classList.add("displayNone")

function modeToggle(){
    rootEle.classList.toggle("dark-mode");
    toggleBtn.classList.toggle("toggleBtnDarkMode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
}