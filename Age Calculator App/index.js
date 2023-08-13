const submitBtn = document.getElementById("submit")
const inputs = document.querySelectorAll(".inputs")


submitBtn.addEventListener("click", () => {
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add("error")
        } else {
            input.parentElement.classList.remove("error")
            const birthMonth = parseInt(document.querySelector(".month.inputs").value);
            const birthDay = parseInt(document.querySelector(".day.inputs").value);
            const birthYear = parseInt(document.querySelector(".year.inputs").value);
            const yearDate = document.querySelector(".yearDate");
            const monthDate = document.querySelector(".monthDate");
            const dayDate = document.querySelector(".dayDate");
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            let currentMonth = currentDate.getMonth() + 1;
            let currentDay = currentDate.getDate();
            let ageYear = currentYear - birthYear;
            let ageMonth = currentMonth - birthMonth;

            if (ageMonth < 0) {
              ageYear--;
              ageMonth += 12;
            }
          
            var ageDay = currentDay - birthDay;
            if (ageDay < 0) {
              ageMonth--;
              var monthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
              ageDay += monthDays;
            }
          
            yearDate.textContent = ageYear;
            monthDate.textContent = ageMonth;
            dayDate.textContent = ageDay;
        }
    })

})

submitBtn.addEventListener("dblclick", () => {
    inputs.textContent = ""
    yearDate.textContent = "--"
    monthDate.textContent = "--"
    dayDate.textContent = "--"
})