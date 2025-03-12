
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});


const menuIcon = document.querySelector("#manu-icon");
const navMenu = document.querySelector(".navmenu");

menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuIcon.classList.toggle("bx-x"); 
});


window.addEventListener("click", function (e) {
    if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    }
});


const downArrow = document.querySelector(".down");
downArrow.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#trending").scrollIntoView({
        behavior: "smooth",
    });
});


const heartIcons = document.querySelectorAll(".heart-icon i");
heartIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        this.classList.toggle("bxs-heart"); 
        this.classList.toggle("bx-heart"); 
    });
});