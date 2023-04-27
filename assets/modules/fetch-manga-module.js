//Manga cards maker
export async function fetchMangas(){
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