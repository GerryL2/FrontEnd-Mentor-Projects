const rates = document.querySelectorAll(".rate")
const submit = document.getElementById("submit")
const rating = document.getElementById("rating")



submit.addEventListener("click", () => {
    document.querySelector(".ratings-section").style.display = "none"
    document.querySelector(".thank-you").style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

