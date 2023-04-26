import * as checkout from '../modules/checkout-module.js'

const lStorage = JSON.parse(localStorage.getItem('productsInCart'));


checkout.onLoadCartNumbers();
checkout.cartNumbers();
checkout.setItems();
checkout.subCost();
checkout.removeItem();
checkout.decreaseQuantity();
checkout.increaseQuantity();
checkout.displayCart();
