const darkLightSwitch = document.querySelector("#light-dark")
const mediaBox = document.querySelectorAll(".box")
const blackToWhite = document.querySelectorAll(".dark-white")


darkLightSwitch.addEventListener("change", (event)=> {
    if (event.target.checked) {
        blackToWhite.forEach(view => {
            view.style.color = "white"
        })
        document.body.style.backgroundImage = "linear-gradient(hsl(232, 19%, 15%) 20%, hsl(230, 17%, 14%) 10%)"
        mediaBox.forEach(box => {
            box.style.backgroundColor = "hsl(228, 28%, 20%)"
        })
    } else {
        blackToWhite.forEach(audience => {
            audience.style.color = "black"
        })
        document.body.style.backgroundImage = "linear-gradient(hsl(225, 100%, 98%) 20%, hsl(0, 0%, 100%) 10%)"
        mediaBox.forEach(box => {
            box.style.backgroundColor = "hsl(227, 47%, 96%)"
        })

    }
})