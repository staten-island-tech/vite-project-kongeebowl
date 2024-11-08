import "../css/style.css";
import { gnomes } from "./products";
import { DOMSelectors } from "./DOMS";

function addCards(gnome) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
        <h2>${gnome.name}</h2>
        <img src="${gnome.image}" alt="" class="card-img">
        <p>${gnome.desc}</p>
      </div>`
  );
}

function clear() {
  DOMSelectors.box.innerHTML = "";
}

function filterAndSortGnomes(trait, threshold) {
  return gnomes
    .filter((gnome) => gnome[trait] >= threshold) // Filter gnomes based on the threshold
    .sort((a, b) => b[trait] - a[trait]); // Sort the filtered gnomes by the trait in descending order
}

function gnomeCards(filteredGnomes) {
  clear();
  filteredGnomes.forEach((gnome) => addCards(gnome));
}

function displayCards() {
  gnomeCards(gnomes);

  DOMSelectors.rizz.addEventListener("click", (event) => {
    event.preventDefault();
    const rizzLords = filterAndSortGnomes("rizz", 7); // Filter and sort by rizz
    gnomeCards(rizzLords);
  });

  DOMSelectors.hot.addEventListener("click", (event) => {
    event.preventDefault();
    const looksmaxxer = filterAndSortGnomes("looks", 8); // Filter and sort by looks
    gnomeCards(looksmaxxer);
  });

  DOMSelectors.wiz.addEventListener("click", (event) => {
    event.preventDefault();
    const wizard = filterAndSortGnomes("magic", 8); // Filter and sort by magic
    gnomeCards(wizard);
  });

  DOMSelectors.swol.addEventListener("click", (event) => {
    event.preventDefault();
    const beachBum = filterAndSortGnomes("strength", 9); // Filter and sort by strength
    gnomeCards(beachBum);
  });
}

displayCards();
