// Import card maker modules
import {fetchMangas} from '../modules/fetch-manga-module.js'
import {fetchAnime} from "../modules/fetch-anime-module.js" 

import * as checkout from '../modules/checkout-module.js'
// console.log(checkout.cart);
// trigger card makers
fetchMangas();
fetchAnime();

// trigger add to cart event listener handler
checkout.fetchProducts();

// FAQ Modal
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

// signup modal
let signUpModalBody = document.querySelector('#signUpModalBody');
let signUpModal = document.querySelector('#signUpModal');
let closeSignupbtn = document.querySelector('#closeSignup');
let dontHaveAcc = document.querySelector('.dontHaveAcc');

console.log(signUpModalBody)

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

// carousel
let slideIndex = 1;

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

showSlide(slideIndex);

// Automatically move to next slide after 5 seconds
setInterval(nextSlide, 2000);
