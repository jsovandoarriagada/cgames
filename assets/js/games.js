const sliderCards = document.querySelector(".slider__cards");

let sliderGames = [];
let games = [];

const loadGames = async () => {
  const response = await fetch("./assets/data/games.json");
  const data = await response.json();
  games = data.games;
  displayHomeGames();
};

const displayHomeGames = () => {
  for (let i = 0; i < games.length; i++) {
    if (games[i].platform == "switch") {
      sliderGames.push(games[i]);
    }
  }

  for (let i = 0; i < 9; i++) {
    sliderCards.innerHTML += `
    <div class="card">
      <img src="${sliderGames[i].image}" draggable="false" class="card__image" alt="${sliderGames[i].title}" />
      <p class="card__title">${sliderGames[i].title}</p>
      <div class="card__genres">
        <p class="card__genre">${sliderGames[i].genres[0]}</p>
        <p class="card__genre">${sliderGames[i].genres[1]}</p>
      </div>
      <div class="card__bottom">
        <div class="card__price">
          <p class="card__price--final">$${sliderGames[i].prices.final}</p>
          <p class="card__price--base">$${sliderGames[i].prices.base}</p>
        </div>
        <div class="card__buttons">
          <!--
          <button class="card__info">
            <span class="material-symbols-outlined">info</span>
          </button>
          -->
          <button class="card__cart" onclick="addToCart(${sliderGames[i].id})">
            <span class="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
    `;
  }
};

loadGames();
