/* Actions button */

const carts = document.querySelectorAll('.add-to-cart-btn');
const carts2 = document.querySelectorAll('.add-to-cart-btn2');

const products = [
{
name: "anime1",
tag: "Tensei Shitara Slime",
genre: "action, isekai, fantasy",
price: 1000,
inCart: 0
},
{
name: "anime2",
tag: "Overlord",
genre: "action, isekai, fantasy",
price: 2000,
inCart: 0
},
{
  name: "anime1",
  tag: "Tensei Shitara Slime",
  genre: "action, isekai, fantasy",
  price: 1000,
  inCart: 0
  }
];

const products2 = [
{
name: "merch1",
tag: "Campfire Cooking in Another World with My Absurd Skill",
genre: "action, isekai, fantasy",
price: 2000,
inCart: 0
},
{
name: "merch2",
tag: "Handyman Saitou in Another World",
genre: "action, isekai, fantasy",
price: 2000,
inCart: 0
}

];

// Loop through each cart button and add an event listener to them
carts.forEach((cart, i) => {
cart.addEventListener('click', () => {
// Call cartNumbers() and subCost() functions with the corresponding product as an argument
cartNumbers(products[i]);
subCost(products[i]);
});
});
// Loop through each cart button and add an event listener to them
carts2.forEach((cart, i) => {
  cart.addEventListener('click', () => {
  // Call cartNumbers() and subCost() functions with the corresponding product as an argument
  cartNumbers(products2[i]);
  subCost(products2[i]);
  });
  });

// Select the cart span element
const cart = document.querySelector('.cart span');

// Function to update the cart span with the number of items in the cart
function onLoadCartNumbers() {
  // Retrieve the cartNumbers from localStorage or set it to zero if it doesn't exist
  const productNumbers = parseInt(localStorage.getItem('cartNumbers')) || 0;
  // Only set the text content of the cart span if the productNumbers is greater than zero
  if (productNumbers > 0) {
    cart.textContent = productNumbers;
  } else {
    cart.textContent = "";
  }
}

// Function to update the cartNumbers in localStorage and the cart span
function cartNumbers(product) {
let productNumbers = parseInt(localStorage.getItem('cartNumbers')) || 0;
// Increment the productNumbers by 1 and update the value in localStorage
localStorage.setItem('cartNumbers', productNumbers + 1);
// Set the text content of the cart span to the updated productNumbers
cart.textContent = productNumbers + 1;
// Call the setItems() function with the product as an argument
setItems(product);
}

// Set items in local storage cart
function setItems(product) {
// Get cart items from local storage
let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};

// If the product is not already in the cart, add it
if (!cartItems[product.tag]) {
    cartItems[product.tag] = {...product, inCart: 0};
}

// Increment the quantity of the product in the cart
cartItems[product.tag].inCart += 1;

// Update cart items in local storage
localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// Calculate and update the subtotal cost of the cart
function subCost(product) {
// Get the subtotal cost from local storage
let cartCost = parseInt(localStorage.getItem('subCost')) || 0;

// Add the price of the product to the subtotal cost
    localStorage.setItem("subCost", cartCost + product.price);
}


// This function removes an item from the cart and updates the cart display

function removeItem(tag) {
    // Retrieve cart items and cost from local storage
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartCost = parseInt(localStorage.getItem('subCost'));
  
    // If cart items exist and the item to be removed exists
    if (cartItems && cartItems[tag]) {
      // Retrieve the removed item and cart numbers
      let removedItem = cartItems[tag];
      let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
  
      // Update cart numbers
      localStorage.setItem('cartNumbers', cartNumbers - removedItem.inCart);
      document.querySelector('.cart span').textContent = cartNumbers - removedItem.inCart;
  
      // Update cart cost
      localStorage.setItem('subCost', cartCost - (removedItem.price * removedItem.inCart));
  
      // Remove the item from the cart
      delete cartItems[tag];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
  
      // Update the cart display
      displayCart();
      
      // Update the cart span
      onLoadCartNumbers();
    }
  }
  

// This function decreases the quantity of an item in the cart, or removes it if quantity becomes 0, and updates the cart display
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
        // If quantity becomes 0, remove the item from the cart and update cart numbers and cart span
        removeItem(tag);
        onLoadCartNumbers(); 
      }
    }
}

// Function to update the cart span with the number of items in the cart
function onLoadCartNumbers() {
  // Retrieve the cartNumbers from localStorage or set it to zero if it doesn't exist
  const productNumbers = parseInt(localStorage.getItem('cartNumbers')) || 0;
  // Only set the text content of the cart span if the productNumbers is greater than zero
  if (productNumbers > 0) {
    cart.textContent = productNumbers;
  } else {
    cart.textContent = "";
    localStorage.removeItem("productsInCart");
    localStorage.removeItem("subCost");
  }
}

  
// This function increases the quantity of an item in the cart and updates the cart display
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

  
  
  const displayCart = () => {
    // Retrieve cart items, product container and cart cost from local storage
    let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('subCost');
  
    console.log(cartItems);
  
    // If cart items exist and product container is found on the page
    if (cartItems && productContainer) {
      // Clear previous product items from product container
      productContainer.innerHTML = '';
      
      // Loop through each item in the cart and add it to the product container
      Object.values(cartItems).map(item => {
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
  
      // Add total cost to the product container
      productContainer.innerHTML += `
        <div class="cartTotalBox">
          <h4 class="cartTotalTitle">Total</h4>
          <h4 class="cartTotal">₱${cartCost}.00</h4>
        </div>`;
    }
  };
  
  // Call functions to initialize the cart when the page loads
  onLoadCartNumbers();
  displayCart();
  

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

const total = document.querySelectorAll('.total');
console.log(total);

  

