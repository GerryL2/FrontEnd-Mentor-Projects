const shareBtn = document.querySelector(".fa-btn")
const shareItems = document.querySelector(".share-items")


shareBtn.addEventListener("click", () => {
    if (shareItems.classList.contains("hide")) {
        shareItems.classList.remove("hide")
        shareBtn.style.color = "#ffffff"
        shareBtn.style.backgroundColor = "#6d7f97"
    } else {
        shareItems.classList.add("hide")
        shareBtn.style.color = "#6d7f97"
        shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
    }
    
})