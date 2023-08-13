const sidebarBtn = document.querySelector("#shownav")
const navbarShown = document.querySelector(".shown-navbar")
const creativesTitle = document.querySelector(".creatives-title")
const listItems = document.querySelectorAll(".shown-navbar li")
const scrollDown = document.getElementById("scroll-down")

sidebarBtn.addEventListener("click", () => {
    creativesTitle.classList.add("hidden")
    navbarShown.classList.remove("hidden")
});

listItems.forEach((input) => {
    input.addEventListener("click", function() {
        navbarShown.classList.add("hidden")
        creativesTitle.classList.remove("hidden")
    })
})

scrollDown.addEventListener("click", () => {
    window.scroll({
        top: window.innerHeight,
        behavior: "smooth"
    })
})


