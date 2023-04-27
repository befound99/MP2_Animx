<<<<<<< HEAD
// Import card maker modules
import {fetchMangas} from '../modules/fetch-manga-module.js'
import {fetchAnime} from "../modules/fetch-anime-module.js" 
=======
//Manga cards maker
async function fetchMangas(){
  // fetch .json for mangas
  const response = await fetch("assets/json/manga-items.json");
  
  // Converts .json to .js;
  const data = await response.json();
  
  const mangas = data.mangas;
  // LOOP
  mangas.forEach(item => {
    const mangaSectionBody = document.querySelector(`.manga-section-body`);

    const cardGroup = document.createElement(`div`);
    cardGroup.classList.add("card-group-manga");
      const mangaCover = document.createElement('div');
      mangaCover.classList.add("card-manga");
      cardGroup.appendChild(mangaCover);
        const mangaImage = document.createElement(`img`);
        mangaImage.src = item.image;
        mangaCover.appendChild(mangaImage);
        const actionDiv = document.createElement(`div`);
        actionDiv.classList.add(`action-div`);
        mangaCover.appendChild(actionDiv);
          const quickViewContainer = document.createElement(`div`);
          quickViewContainer.classList.add(`quickview-container`);
          actionDiv.appendChild(quickViewContainer);
            const quickViewBtn = document.createElement(`button`);
            quickViewBtn.innerHTML = `<span>Quick View</span><i class="fa-regular fa-eye"></i>`
            quickViewBtn.classList.add(`quickview-btn`);
            quickViewContainer.appendChild(quickViewBtn);
          const actionsContainer = document.createElement(`div`);
          actionsContainer.classList.add(`actions-container`);
          actionsContainer.innerHTML= 
          `<button class="add-to-cart-btn" title="add to cart"><i class="fa-solid fa-cart-plus"></i></button>

          <button class="add-to-wishlist-btn" title="add to wishlist"><i class="fa-solid fa-heart-circle-plus" ></i></button>

          <button class="buy-now-btn" title="buy now"><i class="fa-regular fa-money-bill-1"></i></button>`
          actionDiv.appendChild(actionsContainer);



      const mangaDetails = document.createElement(`div`);
      mangaDetails.classList.add(`manga-details`);
      cardGroup.appendChild(mangaDetails);
        const mangaTitle = document.createElement(`p`);
        mangaTitle.classList.add(`manga-title`);
        mangaTitle.innerText = item.title
        mangaDetails.appendChild(mangaTitle)

        const mangaGenre = document.createElement(`p`);
        mangaGenre.classList.add(`manga-genre`);
        mangaGenre.innerText = item.genre
        mangaDetails.appendChild(mangaGenre)

        const mangaPrice = document.createElement(`span`);
        mangaPrice.classList.add(`manga-price`);
        mangaPrice.innerHTML = `₱ ${item.price}`;
        mangaDetails.appendChild(mangaPrice);


    mangaSectionBody.appendChild(cardGroup);
  })
}
fetchMangas()

// Anime Card Maker

fetchAnime = async () => {
  const response = await fetch('assets/json/anime-items.json');
  const data = await response.json();

  const animes = data.animes;

  animes.forEach(item => {
    const animeSectionBody = document.querySelector(".anime-section-body")
    
    const animeCardGroup = document.createElement(`div`)
    animeCardGroup.classList.add(`card-group-anime`)
    animeCardGroup.innerHTML =
      `
      <div class="card-anime">
        <img src="${item.image}" alt="">
        <div class="anime-action-div">
          <div class="anime-quickview-container">
            <a href="#">
              <button><span>Quick View</span><i class="fa-regular fa-eye"></i></button>
            </a>
          </div>
          <div class="actions-container">
            <button class="add-to-cart-btn" title="add to cart"><i class="fa-solid fa-cart-plus"></i></button>

            <button class="add-to-wishlist-btn" title="add to wishlist"><i class="fa-solid fa-heart-circle-plus"></i></button>

            <button class="buy-now-btn" title="buy now"><i class="fa-regular fa-money-bill-1"></i></button>
          </div>
        </div>
      </div>
      <div class="anime-card-details">
        <p class="anime-title">${item.title}</p>
        <p class="anime-genre">${item.genre}</p>
        <span class="anime-price">₱ ${item.price}</span>
      </div>
      `;
      animeSectionBody.appendChild(animeCardGroup);
    // <div class="">
    //
    // </div>
  })


} 
fetchAnime();

/* Actions button */
>>>>>>> v1.9

import * as checkout from '../modules/checkout-module.js'
// console.log(checkout.cart);
// trigger card makers
fetchMangas();
fetchAnime();

// trigger add to cart event listener handler
checkout.fetchProducts();

<<<<<<< HEAD
// FAQ Modal
=======
    carts.forEach((cart, i) => {
      cart.addEventListener('click', () => {
        cartNumbers(products[i]);
        subCost(products[i]);
      });
    });
    
    carts2.forEach((cart, i) => {
      cart.addEventListener('click', () => {
        cartNumbers(products2[i]);
        subCost(products2[i]);
      });
    });
  };

  

  fetchProducts();

const cart = document.querySelector('.cart span');

function onLoadCartNumbers() {
  const productNumbers = parseInt(localStorage.getItem('cartNumbers')) || 0;
  if (productNumbers > 0) {
    cart.textContent = productNumbers;
  } else {
    cart.textContent = "";
  }
}

function cartNumbers(product) {
let productNumbers = parseInt(localStorage.getItem('cartNumbers')) || 0;
localStorage.setItem('cartNumbers', productNumbers + 1);
cart.textContent = productNumbers + 1;
setItems(product);
}

function setItems(product) {
let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};

if (!cartItems[product.tag]) {
    cartItems[product.tag] = {...product, inCart: 0};
}

cartItems[product.tag].inCart += 1;

localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function subCost(product) {
let cartCost = parseInt(localStorage.getItem('subCost')) || 0;

    localStorage.setItem("subCost", cartCost + product.price);
}



function removeItem(tag) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartCost = parseInt(localStorage.getItem('subCost'));
  
    if (cartItems && cartItems[tag]) {
      let removedItem = cartItems[tag];
      let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
  
      localStorage.setItem('cartNumbers', cartNumbers - removedItem.inCart);
      document.querySelector('.cart span').textContent = cartNumbers - removedItem.inCart;
  
      localStorage.setItem('subCost', cartCost - (removedItem.price * removedItem.inCart));
  
      delete cartItems[tag];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
  
      displayCart();
      
      onLoadCartNumbers();
    }
  }
  

function decreaseQuantity(tag) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    let cartCost = parseInt(localStorage.getItem('subCost'));
  
    if (cartItems && cartItems[tag]) {
      let item = cartItems[tag];
      if (item.inCart > 1) {
        item.inCart -= 1;
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        localStorage.setItem('cartNumbers', cartNumbers - 1);
        localStorage.setItem('subCost', cartCost - item.price);
        displayCart();
        onLoadCartNumbers(); 
      } else {
        removeItem(tag);
        onLoadCartNumbers(); 
      }
    }
}


  
const increaseQuantity = (tag) => {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    let cartCost = parseInt(localStorage.getItem('subCost'));
    
    if (cartItems && cartItems[tag]) {
      let item = cartItems[tag];
      item.inCart += 1;
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      localStorage.setItem('cartNumbers', cartNumbers + 1);
      localStorage.setItem('subCost', cartCost + item.price);
      displayCart();
      onLoadCartNumbers();
    }
  };

  function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value;
  
    const appliedCouponCodes = JSON.parse(localStorage.getItem('appliedCouponCodes')) || [];
    if (appliedCouponCodes.includes(couponCode)) {
      alert('This coupon code has already been applied.');
      return;
    }
  
    if (couponCode === 'DISCOUNT10') {
      let cartCost = parseInt(localStorage.getItem('subCost'));
      cartCost *= 0.9; 
      localStorage.setItem('subCost', cartCost);
  
      displayCart();
  
      couponInput.value = '';
  
      alert('Coupon applied!');
  
    } else if (couponCode === 'FREESHIPPING') {
      let cartItems = JSON.parse(localStorage.getItem('cart'));
      for (let item of cartItems) {
        item.shipping_cost = 0;
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
  
      displayCart();
  
      couponInput.value = '';
  
      alert('Coupon applied!');
  
    } else {
      alert('Invalid coupon code!');
    }
  
    appliedCouponCodes.push(couponCode);
    localStorage.setItem('appliedCouponCodes', JSON.stringify(appliedCouponCodes));
  }
  
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
if (applyCouponBtn) {
  applyCouponBtn.addEventListener('click', applyCoupon);
} else {
  console.error('Could not find apply-coupon-btn element');
}

  
  const displayCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('subCost');
  
    console.log(cartItems);
  
    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
  
      if (Object.keys(cartItems).length === 0) { 
        productContainer.innerHTML = "<p>Your cart is empty</p>";
      } else {
        Object.values(cartItems).map((item) => {
          productContainer.innerHTML += `
            <div class="product">
              <i class="fa-solid fa-circle-xmark" onclick="removeItem('${item.tag}')"></i>
              <img src="assets/images/${item.tag}.jpg"> <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
              <i class="fa-solid fa-minus" onclick="decreaseQuantity('${item.tag}')"></i>
              <span>${item.inCart}</span>
              <i class="fa-solid fa-plus" onclick="increaseQuantity('${item.tag}')"></i>
            </div>
            <div class="total"> ₱${item.inCart * item.price}.00 </div>`;
        });
  
        productContainer.innerHTML += `
          <div class="cartTotalBox">
            <h4 class="cartTotalTitle">Sub Total</h4>
            <h4 class="cartTotal">₱${cartCost}.00</h4>
          </div>
        `;
      }
    }
  };
  
  onLoadCartNumbers();
  displayCart();

  // FAQ Modal
>>>>>>> v1.9
// Get the FAQ modal element and button that opens the modal
let faqModal = document.getElementById("faqModal");
let faqBtn = document.getElementById("faqBtn");

// Get the <span> element that closes the FAQ modal
let faqSpan = document.getElementsByClassName("closeFaq")[0];

// When the user clicks the FAQ button, toggle the FAQ modal display
faqBtn.onclick = function() {
// Close the login modal if it is open
if (loginModal.style.display === "block") {
loginModal.style.display = "none";
}

// Toggle the visibility of the FAQ modal
if (faqModal.style.display === "block") {
faqModal.style.display = "none";
} else {
faqModal.style.display = "block";
}
};

// When the user clicks on <span> (x), close the FAQ modal
faqSpan.onclick = function() {
faqModal.style.display = "none";
};

// Add click event listener to accordion headers
let accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(function(header) {
header.addEventListener('click', function() {
// Toggle the visibility of the accordion content
let content = this.nextElementSibling;
content.classList.toggle('accordion-content-visible');
});
});

// Login Modal
// Get the login modal element and the button to open it
let loginModal = document.getElementById("loginModal");
let loginBtn = document.getElementById("userLoginBtn");

// Get the <span> element that closes the login modal
let loginSpan = document.getElementsByClassName("closeLogin")[0];

// When the user clicks the login button, open the login modal
function closeLogin() {
  loginModal.style.display = "none"
}

loginBtn.onclick = function() {
// Close the FAQ modal if it is open
if (faqModal.style.display === "block") {
faqModal.style.display = "none";
}
// Open the login modal
loginModal.style.display = "block";
};

// When the user clicks on <span> (x), close the login modal
loginSpan.onclick = function() {
loginModal.style.display = "none";
};

// Close both modals if the user clicks outside of them
window.onclick = function(event) {
if (event.target == faqModal) {
faqModal.style.display = "none";
} else if (event.target == loginModal) {
loginModal.style.display = "none";
}
};

<<<<<<< HEAD
// signup modal
let signUpModalBody = document.querySelector('#signUpModalBody');
let signUpModal = document.querySelector('#signUpModal');
let closeSignupbtn = document.querySelector('#closeSignup');
let dontHaveAcc = document.querySelector('.dontHaveAcc');

console.log(signUpModalBody)
=======
const total = document.querySelectorAll('.total');
console.log(total);

  
>>>>>>> v1.9

function openSignup (event) {
  event.preventDefault();
  signUpModalBody.style.display = "block";
  loginModal.style.display = "none";
}

function closeSignup () {
  signUpModalBody.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signUpModalBody) {
    signUpModalBody.style.display = "none";
    }
  }
// Sign up modal Events
closeSignupbtn.addEventListener('click', closeSignup)
dontHaveAcc.addEventListener('click', openSignup)

// Login Form Script

// get forms
let loginForm = document.querySelector('#loginForm');
let signupForm = document.querySelector("#signupForm");

// signup submit button
let signupSubmit = document.querySelector("#signupSubmit");

// simple regular expression validations for username and password validation
const usernameRegex = /^[a-zA-Z0-9_]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// local storage for users
let usersStorage = JSON.parse(localStorage.getItem("users"))
// function for handling form submission

let loginFormSubmit = (event) => {
  event.preventDefault();
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  let matched = false;

  for (let i=0; i < usersStorage.length; i++) {
    if (usernameInput.value === usersStorage[i].username && passwordInput.value === usersStorage[i].password) {
      
      alert("SUCCESS");
      matched = true;
      closeLogin();
    } 
  }
  if (!matched) {
    alert("Error")
  }
}
// listen for login
loginForm.addEventListener('submit', loginFormSubmit);


let signupFormSubmit = (event) => {
  event.preventDefault();
  if (usersStorage == null) {
    usersStorage = [];
  }
  let  signupUsername = document.querySelector('#signupUsername').value;
  let  signupPassword = document.querySelector('#signupPassword').value;
  let  signupConfPass = document.querySelector('#signupConfPass').value;

  // RegEx Validation
  if (!usernameRegex.test(signupUsername)){
    alert('Invalid username. Username must contain only letters, numbers, and underscores.')
  } else if (!passwordRegex.test(signupPassword)) {
    alert('Invalid password. Password must be at least 8 characters long, contain at least one letter and one number.');
  } else if (signupPassword !== signupConfPass) {
    alert('Passwords do not match. Please try again.');
  } else if (localStorage.getItem(signupUsername)){
    alert('Username already exists. Please choose a different one.');
  } else  {
    
  }
  // save new user to local storage
  let user = {
    username: signupUsername, 
    password: signupPassword
    };

  usersStorage.push(user);

  localStorage.setItem("users", JSON.stringify(usersStorage));

  alert('Sign up successful!');
  closeSignup();
}
// listen for signup
signupSubmit.addEventListener('click',signupFormSubmit);