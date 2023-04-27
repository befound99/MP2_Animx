
// import * as checkout from '../modules/checkout-module.js'

// checkout.onLoadCartNumbers();
// checkout.cartNumbers();
// checkout.setItems();
// checkout.subCost();
// checkout.removeItem();
// checkout.decreaseQuantity();
// checkout.increaseQuantity();
// checkout.displayCart();

async function fetchProducts(){
    const res = await fetch("assets/script/products.json");
    const data = await res.json();
    const carts = document.querySelectorAll('.add-to-cart-btn');
    const carts2 = document.querySelectorAll('.add-to-cart-btn2');
    const products = data.products;
    const products2 = data.products2;
  
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
  
    const cart = document.querySelector('.cart span');
    console.log(cart);
  
    function onLoadCartNumbers() {
      let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
      if (!isNaN(productNumbers) && productNumbers > 0) {
        cart.textContent = productNumbers;
      } else {
        cart.textContent = "";
        localStorage.removeItem("productsInCart");
        localStorage.removeItem("subCost");
      }
    }
    
  
  function cartNumbers(product) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || {};
    let productNumbers = parseInt(localStorage.getItem('cartNumbers')) || 0;
    
    if (cartItems[product.tag]) {
      cartItems[product.tag].inCart += 1;
    } else {
      cartItems[product.tag] = {...product, inCart: 1};
    }
    
    localStorage.setItem('cartNumbers', productNumbers + 1);
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
    cart.textContent = productNumbers + 1;
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
    
    const displayCart = () => {
      let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
      let productContainer = document.querySelector(".products");
      let cartCost = localStorage.getItem("subCost");
    
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
  
  
  export {fetchProducts, onLoadCartNumbers, cartNumbers, setItems, subCost, removeItem, decreaseQuantity, increaseQuantity, displayCart};