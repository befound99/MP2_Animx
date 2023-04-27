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