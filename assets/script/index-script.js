// Import card maker modules
import {fetchMangas} from '../modules/fetch-manga-module.js'
import {fetchAnime} from "../modules/fetch-anime-module.js" 

// // import checkout functions
// import {fetchProducts} from "./check-out-script.js"
// import {onLoadCartNumbers} from "./check-out-script.js"

// // import checkout queryselectors
// import {cart} from './check-out-script.js'

import * as checkout from '../modules/checkout-module.js'
console.log(checkout.cart);
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