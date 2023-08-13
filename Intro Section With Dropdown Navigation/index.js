const companyDropdownBtn = document.querySelector(".company-dropdown button");
const featuresDropdownBtn = document.querySelector(".features-dropdown button");
const companyDropdownBody = document.querySelector(".company-dropdown .dropdown-content");
const featuresDropdownBody = document.querySelector(".features-dropdown .dropdown-content");

companyDropdownBtn.addEventListener("click", () => {
  toggleDropdown(companyDropdownBody);
});

featuresDropdownBtn.addEventListener("click", () => {
  toggleDropdown(featuresDropdownBody);
});

function toggleDropdown(dropdownBody) {
  let downArrow = dropdownBody.parentElement.querySelector(".down-arrow");
  let isShown = dropdownBody.style.display !== "none";

  if (isShown) {
    dropdownBody.style.display = "none";
    downArrow.style.transform = "rotate(0deg)";
  } else {
    dropdownBody.style.display = "block";
    downArrow.style.transform = "rotate(180deg)";
  }
}

const setupDropdown = (buttonSelector, bodySelector) => {
  const dropdownBtn = document.querySelector(buttonSelector);
  const dropdownBody = document.querySelector(bodySelector);

  if (!dropdownBtn || !dropdownBody) return;

  dropdownBtn.addEventListener("click", () => {
    const downArrow = dropdownBody.querySelector(".down-arrow");
    const isShown = dropdownBody.style.display !== "none";

    dropdownBody.style.display = isShown ? "none" : "block";
    
    if (downArrow) {
      downArrow.style.transform = isShown ? "rotate(0deg)" : "rotate(180deg)";
    }
  });
};

setupDropdown(".sidenav-company-dropdown .company", ".sidenav-company-dropdown .sidenav-dropdown-content");

setupDropdown(".sidenav-features-dropdown .features", ".sidenav-features-dropdown .sidenav-dropdown-content");



const hamburgerBtn = document.querySelector(".hamburger-btn")
const sidenavBody = document.querySelector(".sidenav")
const closeButton = document.querySelector(".close-btn")
const wrapperBody = document.querySelector(".wrapper")

hamburgerBtn.addEventListener("click", ()=> {
    sidenavBody.style.display = "block"
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
})

closeButton.addEventListener("click", function() {
    sidenavBody.style.display = "none"
    document.body.style.backgroundColor = "white";

})



const wrapperImage = document.querySelector(".wrapper-image");
function mobileChange(x) {
  if (x.matches) {
    wrapperImage.innerHTML = `<img src="images/image-hero-mobile.png">`;
  } else {
    wrapperImage.innerHTML = `<img src="images/image-hero-desktop.png">`;
  }
}

var x = window.matchMedia("(max-width: 844px)");
mobileChange(x); 
x.addEventListener("change", mobileChange); 


