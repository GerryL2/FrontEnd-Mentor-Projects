

const monthYear = document.querySelector(".month-year")
const monthYearMobile = document.querySelector(".month-year-mobile")
const checkboxInput = document.querySelector(".checkbox-container input")

checkboxInput.addEventListener("change", ()=> {
    if (checkboxInput.checked) {
        monthYear.innerHTML = " year"
        monthYearMobile.innerHTML = " year"
    } else {
        monthYear.innerHTML = " month"
        monthYearMobile.innerHTML = " month"
    }
    
})

function sliderValue() {
    const sliderValue = document.querySelector(".slider");
    const sliderThumb = document.querySelector(".price-amount");
    const priceAmountTwo = document.querySelector(".price-amount-two")
    const viewAmount = document.querySelector(".page-views")
    const x = (sliderValue.value / sliderValue.max) * 100; 
    sliderValue.max = "36";
    if (checkboxInput.checked) {
        sliderValue.value * 0.25
    }
    const color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${x}%, hsl(224, 65%, 95%) ${x}%)`;
    sliderValue.style.background = color;
    sliderThumb.innerHTML = "$" + sliderValue.value + ".00";
    priceAmountTwo.innerHTML = "$" + sliderValue.value + ".00";

    if (sliderValue.value <= 8) {
        viewAmount.innerHTML = "10K"
    } else if (sliderValue.value <= 12) {
        viewAmount.innerHTML = "50K"
    } else if (sliderValue.value <= 16) {
        viewAmount.innerHTML = "100K"
    } else if (sliderValue.value <= 24) {
        viewAmount.innerHTML = "500K"
    } else {
        viewAmount.innerHTML = "1M"
    }

}

sliderValue();


