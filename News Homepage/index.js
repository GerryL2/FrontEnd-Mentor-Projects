const closeButton = document.querySelector(".close-btn")
const hamSideBar = document.querySelector(".hamburger-sidebar")
const openSideBar = document.querySelector(".sidenav")
const hamburgerBtn = document.querySelector(".mobile-sidenav")
const containerEL = document.querySelector(".container")

hamburgerBtn.addEventListener("click", () => {
    openSideBar.style.display = "block"
})

closeButton.addEventListener("click", ()=> {
    openSideBar.style.display = "none"
})