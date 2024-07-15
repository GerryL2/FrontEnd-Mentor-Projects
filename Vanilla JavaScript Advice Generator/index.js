const adviceNumber = document.querySelector(".advice-number")
const adviceText = document.querySelector(".advice")
const diceBtn = document.querySelector(".fa-dice-five")
const dividerImg = document.querySelector(".divider-img")
let addEvent = ""
let desktopImg = document.createElement("img")
dividerImg.append(desktopImg)


async function fetchData() {
    try{
        const reponse = await fetch("https://api.adviceslip.com/advice")

        if (!reponse.ok) {
            throw new Error("Could not fetch resource")
        }
        const data = await reponse.json();
        newAdvice(data)
    } catch (error) {
        console.error(error)
    }

}


function newAdvice(data) {
    adviceNumber.innerHTML = `ADVICE #${data.slip.id}`
    adviceText.innerHTML = `"${data.slip.advice}"`
}

function screenChange(x) {
    desktopImg.src = `${x ? "./images/pattern-divider-desktop.svg" : "./images/pattern-divider-mobile.svg"}`

}

const mmObj = window.matchMedia("(min-width: 601px)")

mmObj.addEventListener("change", function() {
    screenChange(mmObj)
})

diceBtn.addEventListener("click", fetchData)

fetchData()
screenChange(mmObj)



