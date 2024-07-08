const plusBtn = document.querySelectorAll(".plus-btn")
const whatIsDiv = document.querySelector(".what-is-text")
const frontFreeDiv = document.querySelector(".front-free-text")
const canIText = document.querySelector(".can-i-text")
const howCanText = document.querySelector(".how-can-text")
const plusButton = document.querySelector(".plus-btn")

plusBtn.forEach(plus => {
    plus.addEventListener("click", function() {
        if (plus.classList.contains("what-btn")) {
            if (whatIsDiv.style.display === "none") {
                whatIsDiv.style.display = "block"
                plus.classList.remove("fa-circle-plus")
                plus.classList.add("fa-circle-minus")
                plus.style.color = "hsl(292, 42%, 14%)"
            } else {
                whatIsDiv.style.display = "none"
                plus.classList.add("fa-circle-plus")
                plus.style.color = "rgb(173, 40, 235)"
            }
        } else if (plus.classList.contains("front-btn")) {
            if (frontFreeDiv.style.display === "none") {
                frontFreeDiv.style.display = "block"
                plus.classList.remove("fa-circle-plus")
                plus.classList.add("fa-circle-minus")
                plus.style.color = "hsl(292, 42%, 14%)"
            } else {
                frontFreeDiv.style.display = "none"
                plus.classList.add("fa-circle-plus")
                plus.style.color = "rgb(173, 40, 235)"
            }
        } else if (plus.classList.contains("can-btn")) {
            if (canIText.style.display === "none") {
                canIText.style.display = "block"
                plus.classList.remove("fa-circle-plus")
                plus.classList.add("fa-circle-minus")
                plus.style.color = "hsl(292, 42%, 14%)"
            } else {
                canIText.style.display = "none"
                plus.classList.add("fa-circle-plus")
                plus.style.color = "rgb(173, 40, 235)"
            }
        } else if (plus.classList.contains("how-btn")) {
            if (howCanText.style.display === "none") {
                howCanText.style.display = "block"
                plus.classList.remove("fa-circle-plus")
                plus.classList.add("fa-circle-minus")
                plus.style.color = "hsl(292, 42%, 14%)"
            } else {
                howCanText.style.display = "none"
                plus.classList.add("fa-circle-plus")
                plus.style.color = "rgb(173, 40, 235)"
            }
        }
    })
})