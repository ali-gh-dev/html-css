const navBtn = document.getElementById("nav-btn")
const navbar = document.getElementById("navbar")
const navClose = document.getElementById("nav-close")

// show navbar
navBtn.addEventListener("click", () => {
    navbar.classList.add("ShowNav");
})


// hide navbar
navClose.addEventListener("click", () => {
    navbar.classList.remove("ShowNav");
})
