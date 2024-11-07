import "../css/style.css";
import { gnomes } from "./products";
import { DOMSelectors } from "./DOMS";

function rizzButton() {
  DOMSelectors.button;
}

function addCards() {
  gnomes.forEach((gnome) =>
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card"> 
        <h2>${gnome.name}</h2>
        <img src="${gnome.image}" alt="" class="card-img">
        <p>${gnome.desc}</p>
      </div>
      `
    )
  );
}
addCards();

function rizzGods() {
  gnomes.filter((gnome) => gnome.rizz >= 7);
}
