const shoeSlide = document.querySelector(".shoe-slide");
const shoeImages = document.querySelectorAll(".shoe-slide img");
const lastClone = document.querySelector(".lastClone")
const firstClone = document.querySelector(".firstClone")
const easeEl = document.querySelector(".ease");
const styleEl = getComputedStyle(easeEl);

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let counter = 1;
const size = shoeImages[0].clientWidth;
shoeSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= shoeImages.length - 1) return
  shoeSlide.style.transition = styleEl.transition;
  counter++;
  shoeSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return
  shoeSlide.style.transition = styleEl.transition;
  counter--;
  shoeSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

shoeSlide.addEventListener("transitionend", () => {
  if (shoeImages[counter] === lastClone) {
    shoeSlide.style.transition = "none"
    counter = shoeImages.length -2
    shoeSlide.style.transform = "translateX(" + (-size * counter) + "px)"
  }

  if (shoeImages[counter] === firstClone) {
    shoeSlide.style.transition = "none"
    counter = shoeImages.length - counter
    shoeSlide.style.transform = "translateX(" + (-size * counter) + "px)"
  }

})


//Increment section

const minusBtn = document.querySelector(".minus-button")
const plusBtn = document.querySelector(".plus-button")
const shoesAmount= document.querySelector(".shoes-amount")
const amountOfShoes = document.querySelector(".amount-of-shoes p")
const amountOfShoesDiv = document.querySelector(".amount-of-shoes")
const addToCart = document.querySelector(".add-cart")
const checkoutBtn = document.querySelector(".checkout-btn")
const deleteBtn = document.querySelector(".delete")
const shoesCartAmount = document.querySelector(".shoes-cart-amount")
const cartTotal = document.querySelector(".total")
const cartBtn = document.querySelector(".first-cart-button")
const cartBox =document.querySelector(".cart")

let count = 0


minusBtn.addEventListener("click", () => {

  amountOfShoesDiv.style.display = "block"
    let countSub = count --
    shoesAmount.innerHTML = countSub

})

plusBtn.addEventListener("click", () => {
  amountOfShoesDiv.style.display = "block"
  let countAdd = count++
  shoesAmount.innerHTML = countAdd

})

addToCart.addEventListener("click", () => {
  cartTotal.innerHTML = "$" + 125.00 * shoesAmount.innerHTML + ".00"
  amountOfShoes.innerHTML = shoesAmount.innerHTML
  shoesCartAmount.innerHTML = shoesAmount.innerHTML
  cartItems.style.display = "block"
  emptyEl.style.display = "none"
  
})





// Cart section

const emptyEl = document.querySelector(".empty")
const cartItems = document.querySelector(".cart-items")

cartBtn.addEventListener("click", () => {
  if (cartBox.style.display === "none" || cartBox.style.display === "") {
    cartBox.style.display = "block";
  } else {
    cartBox.style.display = "none";
  }

  if (shoesCartAmount.innerHTML === "" ) {
    cartItems.style.display = "none"
    emptyEl.style.display = "block"
    cartBox.style.width = "390px"
  } 

})


deleteBtn.addEventListener("click", () => {
  cartTotal.innerHTML = ""
  amountOfShoes.innerHTML = ""
  shoesCartAmount.innerHTML = ""
  shoesAmount.innerHTML = "0"
  count = 0
})

checkoutBtn.addEventListener("click", () => {
  location.reload()
})


// Hamburger Section 

const hamburgerBtn = document.querySelector(".hamburger")
const hamburgerSidebar = document.querySelector('.hamburger-sidebar');


hamburgerBtn.addEventListener('click', () => {
  hamburgerSidebar.classList.toggle('open');
  hamburgerSidebar.style.display = "block"
})

const closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener("click", ()=> {
  hamburgerSidebar.style.display = "none"
})


// Desktop Shoe Preview Image

const shoeChoices = document.querySelectorAll(".shoe-choices")
const shoeSelection = document.querySelector(".shoe-selection")
const shoeOne = document.images[10]
const shoeTwo = document.images[11]
const shoeThree = document.images[12]
const shoeFour = document.images[13]


shoeChoices.forEach((shoe) => {
  shoe.addEventListener("click", () => {
    if (shoe === shoeFour) {
      shoeSelection.innerHTML = `<img src="images/image-product-4.jpg">`

    } else if (shoe === shoeOne) {
      shoeSelection.innerHTML = `<img src="images/image-product-1.jpg">`
    } else if (shoe === shoeTwo) {
      shoeSelection.innerHTML = `<img src="images/image-product-2.jpg">`
    } else if (shoe === shoeThree) {
      shoeSelection.innerHTML = `<img src="images/image-product-3.jpg">`
    }
  })
})




document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('#lightbox-img');
  const closeButton = document.querySelector('.close-button');
  const previousButton = document.querySelector('.previous-button');
  const forwardButton = document.querySelector('.forward-button');
  const thumbnails = document.querySelectorAll('.thumbnailTwo');
  let currentIndex = 0;

  shoeSelection.addEventListener("click", ()=> {
    lightbox.style.display = 'block';
    lightboxImg.src = 'images/image-product-4.jpg'
    currentIndex = index;
    updateButtons();
  });

  closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });

  previousButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = thumbnails.length - 1;
    }
    lightboxImg.src = thumbnails[currentIndex].src;
    updateButtons();
  });

  forwardButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= thumbnails.length) {
      currentIndex = 0;
    }
    lightboxImg.src = thumbnails[currentIndex].src;
    updateButtons();
  });

  function updateButtons() {
    previousButton.style.display = 'block';
    forwardButton.style.display = 'block';

    if (currentIndex === 0) {
      previousButton.style.display = 'none';
    }

    if (currentIndex === thumbnails.length - 1) {
      forwardButton.style.display = 'none';
    }
  }
});
