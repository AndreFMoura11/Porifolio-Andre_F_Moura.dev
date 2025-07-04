let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(",scroll-button a")
console.log(scrollBtn)
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.computedStyleMap.display = "block";
    } else {
        nav.classList.remove("sticky")
        scrollBtn.style.display = "nome";
    }
};

// Side NavIgation Menu JS code
let body = document.querySelector("body")
let navBar = document.querySelector(".navbar")
let menuBtn = document.querySelector(".menu-btn")
let cancelBtn = document.querySelector(".cancel-btn")
menuBtn.onclick = function () {
    navBar.classList.add("active")
    menuBtn.style.opacity = "0"
    menuBtn.style.pointerEvents = "none"
    body.style.overflow = "hidden"
    scrollBtn.style.pointerEvents = "none"
}


