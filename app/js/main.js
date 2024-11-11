import "../css/style.css";
import { gnomes } from "./products";
import { DOMSelectors } from "./DOMS";

function addCards(gnome) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
        <h2>${gnome.name}</h2>
        <img src="${gnome.image}" alt="${gnome.desc}" class="card-img">
        <h3>Rizz - ${gnome.rizz} Looks - ${gnome.looks}</h3>
        <h3>Magic - ${gnome.magic} Strength - ${gnome.strength}</h3>
      </div>`
  );
}

function clear() {
  DOMSelectors.box.innerHTML = "";
}

function filterAndSortGnomes(trait, minimum) {
  return gnomes
    .filter((gnome) => gnome[trait] >= minimum)
    .sort((a, b) => b[trait] - a[trait]);
}

function gnomeCards(filteredGnomes) {
  clear();
  filteredGnomes.forEach((gnome) => addCards(gnome));
}

function displayCards() {
  gnomeCards(gnomes);

  DOMSelectors.allGnomes.addEventListener("click", (event) => {
    event.preventDefault();
    gnomeCards(gnomes);
  });

  DOMSelectors.rizzButton.addEventListener("click", (event) => {
    event.preventDefault();
    const rizzLords = filterAndSortGnomes("rizz", 8);
    gnomeCards(rizzLords);
  });

  DOMSelectors.hotnessButton.addEventListener("click", (event) => {
    event.preventDefault();
    const looksmaxxer = filterAndSortGnomes("looks", 8);
    gnomeCards(looksmaxxer);
  });

  DOMSelectors.wizButton.addEventListener("click", (event) => {
    event.preventDefault();
    const wizard = filterAndSortGnomes("magic", 8);
    gnomeCards(wizard);
  });

  DOMSelectors.swolButton.addEventListener("click", (event) => {
    event.preventDefault();
    const beachBum = filterAndSortGnomes("strength", 9);
    gnomeCards(beachBum);
  });
}

displayCards();

DOMSelectors.lightMode.addEventListener("click", () => {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

DOMSelectors.darkMode.addEventListener("click", () => {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});
