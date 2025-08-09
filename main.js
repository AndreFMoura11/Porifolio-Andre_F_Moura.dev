let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a")
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

cancelBtn.onclick = function () {
    navBar.classList.remove("active")
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto"
    body.style.overflow = "auto"
    scrollBtn.style.pointerEvents = "auto";
}

//Side Navigation bar close while we click navigation links

let navLinks = document.querySelectorAll(".menu li a")
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navBar.classList.remove("active")
        menuBtn.style.opacity = "1"
        menuBtn.style.pointerEvents = "auto"
    })
}


const rightSection = document.querySelector('.home .right');


function toggleRightSection(e) {
    if (e.matches) {

        rightSection.style.display = 'none';
    } else {

        rightSection.style.display = '';
    }
}

const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', toggleRightSection);


toggleRightSection(mediaQuery);
