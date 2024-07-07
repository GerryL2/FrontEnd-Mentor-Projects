import  { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://to-do-database-574e7-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const toDoDB = ref(database, "toDoList")
const switchInput = document.querySelector("switch")
const inputCheckboxSwitch = document.querySelector(".inputSwitch")
const addTodoBtn = document.querySelector(".fa-plus")
const toDoInput = document.querySelector(".todoInput")
const toDoItemsEl = document.querySelector(".toDoItems")
const toDoSpan = document.getElementById("toDoLeft")

toDoInput.addEventListener("keypress", function(e) {
    let inputValue = toDoInput.value
    if (e.key === "Enter") {
        if (toDoInput.value) {
            push(toDoDB, inputValue)
            console.log(inputValue)
            clearToDoInput()
        } else {
            console.log("Nope")
        }
    }

})



let storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}

function clearToDoInput() {
    toDoInput.value = ""
}

onValue(toDoDB, function(snapshot) {
    if (snapshot.exists()) {
        let toDoArray = Object.entries(snapshot.val())
        clearToDoItems()
        for (let i = 0; i < toDoArray.length; i++) {
            let toDoArrayIndex = toDoArray[i]
            toDoLeft.innerHTML = toDoArray.length
            appendToDoArray(toDoArrayIndex)
            
        }
    }
})

function clearToDoItems() {
    toDoItemsEl.textContent = ""
}

let toDoEl = document.createElement("p")


function appendToDoArray(items) {
    let toDoDiv = document.createElement("div")
    let toDoCheck = document.createElement("input") 
    let toDoCross = document.createElement("div")
    let toDoLeft = document.createElement("div")
    let toDoLabel = document.createElement("label")
    let toDoHr = document.createElement("hr")
    let toDoID = items[0]
    let toDoValue = items[1]
    const completedBtn = document.querySelector(".completed-btn")
    const activeBtn = document.querySelector(".active-btn")
    const allBtn = document.querySelector(".all-btn")
    const clearCompleted = document.getElementById("clear-btn")
    const checkboxSwitch = document.getElementById("checkbox-switch")
    const extraBtn = document.querySelectorAll(".extraBtn")
    const addTodo = document.querySelector(".addTodo")
    const switchIcon = document.getElementById("switch-icon")

    toDoDiv.dataset.id = toDoID



    toDoCross.addEventListener("dblclick", function() {
        let exactToDoLocation = ref(database, `toDoList/${toDoID}`)
        remove(exactToDoLocation)
    })

    toDoCheck.setAttribute("type", "checkbox")
    toDoDiv.className = "toDoDiv"
    toDoEl.innerHTML = items
    toDoCross.innerHTML = "<i class='fa-solid fa-x' style='color: #777a92;'></i>"
    toDoCross.className = "toDoCross"
    toDoLeft.className = "toDoLeft"
    toDoCheck.className = "toDoCheck"
    toDoLabel.className = "toDoLabel"
    toDoHr.className = "toDoHr"
    toDoDiv.classList.add("active")
    toDoDiv.classList.add("all")
    toDoLabel.append(toDoCheck)
    toDoLeft.append(toDoLabel)
    toDoLeft.append(toDoValue)
    toDoDiv.append(toDoLeft)
    toDoDiv.append(toDoCross)
    toDoItemsEl.append(toDoDiv)

    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = currentTheme;

    if (targetTheme === "darkMode") {
        targetTheme = "darkMode";
        localStorage.setItem('theme', targetTheme);
    } else {
        targetTheme = "lightMode"
        localStorage.setItem('theme', targetTheme);

    }
    document.documentElement.setAttribute('data-theme', targetTheme)

    const toDoExtras = document.querySelector(".toDoExtras")


    document.body.setAttribute("data-theme", targetTheme)
    toDoExtras.setAttribute("data-theme", targetTheme)
    toDoInput.setAttribute("data-theme", targetTheme)
    addTodo.setAttribute("data-theme", targetTheme)
    toDoDiv.setAttribute("data-theme", targetTheme)
    extraBtn.forEach(toDoExtra => {
        toDoExtra.setAttribute("data-theme", currentTheme)
    })

    

    toDoCheck.addEventListener("change", function() {
        if (this.checked) {
            toDoDiv.classList.add("completed")
            toDoDiv.classList.remove("active")
            toDoLabel.style.backgroundImage = "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
            console.log("clicked")
        } else {
            toDoDiv.classList.remove("completed")
            toDoDiv.classList.add("active")
            toDoLabel.style.backgroundImage = "linear-gradient(to right, hsl(235, 24%, 19%), hsl(235, 24%, 19%))"
            toDoLabel.style.color = "red"
        }

    })


    allBtn.addEventListener("click", function() {
        const toDoDivs = document.querySelectorAll(".toDoDiv")

        toDoDivs.forEach(toDoDiv => {
            if (toDoDiv.classList.contains("all")) {
                toDoDiv.classList.add("active")
                if (toDoDiv.classList.contains("hidden")) {
                    toDoDiv.classList.remove("hidden")
                    toDoDiv.classList.add("show") 
                }
            } else if (!toDoDiv.classList.contains("all")) (
                toDoDiv.classList.add("active")
            )
        })
    })

    completedBtn.addEventListener("click", function() {
        const toDoDivs = document.querySelectorAll(".toDoDiv")

        toDoDivs.forEach(toDoDiv => {
            if (toDoDiv.classList.contains("completed")) {
                toDoDiv.classList.remove("hidden")
                if (toDoDiv.classList.contains("active")) {
                    toDoDiv.classList.add("hidden")
                }
            } else {
                toDoDiv.classList.add("hidden")
            }
        })
    })

    activeBtn.addEventListener("click", function() {
        const toDoDivs = document.querySelectorAll(".toDoDiv"); 

        toDoDivs.forEach(toDoDiv => {
            if (toDoDiv.classList.contains("active")) {
                toDoDiv.classList.remove("hidden");
                
                if (toDoDiv.classList.contains("completed")) {
                    toDoDiv.classList.add("hidden")
                    toDoDiv.classList.remove("active")
                    toDoDiv.classList.remove("show")
                }
            } else {
                toDoDiv.classList.add("hidden");
            }
        });
    })

    clearCompleted.addEventListener("dblclick", function() {
        const toDoDivs = document.querySelectorAll(".toDoDiv");
        toDoDivs.forEach(toDoDiv => {
            if (toDoDiv.classList.contains("completed")) {
                let toDoID = toDoDiv.dataset.id; 
                let exactToDoDiv = ref(database, `toDoList/${toDoID}`);
                remove(exactToDoDiv);
            }
        });
    });




    
    


    checkboxSwitch.addEventListener("change", function() {
    if (this.checked) {
        var targetTheme = "lightMode";
    

        if (targetTheme === "darkMode") {
            targetTheme = "darkMode";
            localStorage.setItem('theme', targetTheme);
        } else {
            targetTheme = "lightMode"
            localStorage.setItem('theme', targetTheme);
    
        }
    
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
        switchIcon.classList.remove("fa-sun")
        switchIcon.classList.remove("fa-regular")
        switchIcon.classList.add("fa-moon")
        switchIcon.classList.add("fa-solid")



        
        document.body.setAttribute("data-theme", targetTheme)
        toDoExtras.setAttribute("data-theme", targetTheme)
        toDoInput.setAttribute("data-theme", targetTheme)
        addTodo.setAttribute("data-theme", targetTheme)
        toDoDiv.setAttribute("data-theme", targetTheme)

        extraBtn.forEach(toDoExtra => {
            toDoExtra.setAttribute("data-theme", targetTheme)
            toDoExtra.style.backgroundColor = "hsl(0, 0%, 98%)"
        })




    } else {

        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "darkMode";
    

        if (targetTheme === "darkMode") {
            targetTheme = "darkMode";
            localStorage.setItem('theme', targetTheme);
        } else {
            targetTheme = "lightMode"
            localStorage.setItem('theme', targetTheme);
    
        }
        switchIcon.classList.add("fa-sun")
        switchIcon.classList.add("fa-regular")
        switchIcon.classList.remove("fa-moon")
        switchIcon.classList.remove("fa-solid")
        document.documentElement.setAttribute('data-theme', targetTheme)

        localStorage.setItem('theme', targetTheme);
        document.body.classList.add("darkMode")
        document.body.setAttribute("data-theme", targetTheme)
        toDoExtras.setAttribute("data-theme", targetTheme)
        toDoInput.setAttribute("data-theme", targetTheme)
        addTodo.setAttribute("data-theme", targetTheme)
        toDoDiv.setAttribute("data-theme", targetTheme)

        extraBtn.forEach(toDoExtra => {
            toDoExtra.setAttribute("data-theme", targetTheme)
            toDoExtra.style.backgroundColor = "hsl(235, 24%, 19%)"
        })



    }





    
})


}
