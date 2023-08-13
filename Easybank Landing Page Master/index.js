const hamburgerBtn = document.querySelector(".hamburger")
const sideNavBody  = document.querySelector(".sidenav")
const closeBtn = document.querySelector(".close")
const nextGenerationBody = document.querySelector(".next-generation")
const phoneImages = document.querySelector(".right-images img")
const sidenavAnchorTags = document.querySelectorAll(".sidenav a")

hamburgerBtn.addEventListener("click", ()=> {
    sideNavBody.style.display = "block"
    hamburgerBtn.style.display = "none"
    closeBtn.style.display = "block"
    phoneImages.style.visibility = "hidden"
})

closeBtn.addEventListener("click", ()=> {
    closeBtn.style.display = "none"
    hamburgerBtn.style.display = "block"
    sideNavBody.style.display = "none"
    phoneImages.style.visibility = "visible"

})

sidenavAnchorTags.forEach((anchor) => {
    anchor.addEventListener("click", ()=> {
        closeBtn.style.display = "none"
        hamburgerBtn.style.display = "block"
        sideNavBody.style.display = "none"
        phoneImages.style.visibility = "visible"
    })
})
