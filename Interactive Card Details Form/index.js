const cardNumber = document.querySelector(".card-number")
const cardName = document.querySelector(".card-name")
const cardMonth = document.querySelector(".card-month")
const cardYear = document.querySelector(".card-year")
const cardCvc = document.querySelector(".card-cvc")
const cardholderName = document.querySelector(".cardholder-name")
const inputCardNumber = document.querySelector(".input-card-number")
const inputExpMonth = document.querySelector(".card-exp-month")
const inputExpYear = document.querySelector(".card-exp-year")
const inputCvc = document.querySelector(".card-cvc-input")
const confirmBtn = document.querySelector(".confirm-btn")
const cardForm = document.querySelector(".card-form")
const thankYou = document.querySelector(".thank-you")
const continueBtn = document.querySelector(".continue-btn")
const hiddenEl = document.querySelector("#hidden")



function cardInput() {
    cardNumber.innerHTML = inputCardNumber.value
    cardName.innerHTML = cardholderName.value
    cardMonth.innerHTML = inputExpMonth.value
    cardYear.innerHTML = inputExpYear.value
    cardCvc.innerHTML = inputCvc.value
}


confirmBtn.addEventListener("click", function() {
    const cardFormInputs = document.querySelectorAll("input")
    cardFormInputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add("error")
        } else {
            cardForm.classList.add("hidden")
            hiddenEl.removeAttribute("id")
        }
    })
})

continueBtn.addEventListener("click", function() {
    location.reload()
})
