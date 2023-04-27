// MERCHANDISE TABS

// variables
const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

function openTab(event, tabName) {
  // hide tab contents
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // remove active class from tab links
  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // show selected tab content
  document.getElementById(tabName).classList.add("active");

  // add active class to the clicked tab link
  event.currentTarget.classList.add("active");
}

// set the default tab to be opened
document.getElementById("tab1").classList.add("active");
document.querySelector(".tablinks:first-child").classList.add("active");

// event listener for each tab link
tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    openTab(event, link.getAttribute("data-tab"));
  });
});



// MERCH CARDS
const cardContent = (product) => {
  return `
    <div class="img-container">
      <img src="${product.image}">
      <div class="action-div">
        <div class="quickview-container">
          <a href="#">
            <button class="quickview-btn"><span>Quick View</span><i class="fa-regular fa-eye"></i></button>
          </a>
        </div>
        <div class="actions-container">
          <button class="add-to-cart-btn" title="Add to cart"><i class="fa-solid fa-cart-plus"></i>
          </button>
          <button class="add-to-wishlist-btn" title="Add to wishlist"><i class="fa-solid fa-heart-circle-plus"></i>
          </button>
          <button class="buy-now-btn" title="uy now"><i class="fa-regular fa-money-bill-1"></i></button>
        </div>
      </div>
    </div> 
    <div class="product-info">
      <a class="product-name" title="${product.name}">
        ${product.name}
      </a> 
      <span class="price">${product.price}</span>
      <span class ="location">${product.location}</span>
    </div>
  `
}

// for action figures tab
const fetchFigures = async () => {
  const response = await fetch('assets/json/merch-items.json');
  const data = await response.json();

  const merch = data.figures;

  merch.forEach ((product) => {
    const merchCardsSection = document.querySelector("#tab1");

    const merchCard = document.createElement(`div`);

    merchCard.classList.add(`merch-card`);
    merchCard.innerHTML = cardContent(product);

    merchCardsSection.appendChild(merchCard);
  });
}

// for apparels tab
const fetchApparels = async () => {
  const response = await fetch('assets/json/merch-items.json');
  const data = await response.json();

  const merch = data.apparels;

  merch.forEach ((product) => {
    const merchCardsSection = document.querySelector("#tab2");

    const merchCard = document.createElement(`div`);

    merchCard.classList.add(`merch-card`);
    merchCard.innerHTML = cardContent(product);

    merchCardsSection.appendChild(merchCard);
  });
}

// for bags tab
const fetchBags = async () => {
  const response = await fetch('assets/json/merch-items.json');
  const data = await response.json();

  const merch = data.bags;

  merch.forEach ((product) => {
    const merchCardsSection = document.querySelector("#tab3");

    const merchCard = document.createElement(`div`);

    merchCard.classList.add(`merch-card`);
    merchCard.innerHTML = cardContent(product);

    merchCardsSection.appendChild(merchCard);
  });
}

// for plushies tab
const fetchPlushies = async () => {
  const response = await fetch('assets/json/merch-items.json');
  const data = await response.json();

  const merch = data.plushies;

  merch.forEach ((product) => {
    const merchCardsSection = document.querySelector("#tab4");

    const merchCard = document.createElement(`div`);

    merchCard.classList.add(`merch-card`);
    merchCard.innerHTML = cardContent(product);

    merchCardsSection.appendChild(merchCard);
  });
}

// for posters tab
const fetchPosters = async () => {
  const response = await fetch('assets/json/merch-items.json');
  const data = await response.json();

  const merch = data.posters;

  merch.forEach ((product) => {
    const merchCardsSection = document.querySelector("#tab5");

    const merchCard = document.createElement(`div`);

    merchCard.classList.add(`merch-card`);
    merchCard.innerHTML = cardContent(product);

    merchCardsSection.appendChild(merchCard);
  });
}

fetchFigures();
fetchApparels();
fetchBags();
fetchPlushies();
fetchPosters();




