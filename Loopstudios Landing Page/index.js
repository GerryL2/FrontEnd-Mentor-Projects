const sideNav = document.querySelector(".sidenav")
const hamburgerEl = document.querySelector(".hamburger")
const closeButton = document.querySelector(".close-button")

hamburgerEl.addEventListener("click", ()=> {
    sideNav.style.display = "block"
})

closeButton.addEventListener("click", ()=> {
    sideNav.style.display = "none"
})