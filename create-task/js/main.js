import "../styles/style.css";
import { fishList } from "./list";
import { DOMSelectors } from "./dom";

DOMSelectors.theme.addEventListener("click", function (e) {
  e.preventDefault();
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    console.log("dark mode");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    console.log("light mode");
  }
});

DOMSelectors.search.addEventListener("keyup", function (e) {
  try {
    e.preventDefault();
    const data = fishList;
    const searchString = e.target.value;
    console.log(searchString);
    const filteredFish = data.filter((fish) => {
      return fish.name.toLowerCase().includes(searchString);
    });
    console.log(filteredFish);
    if (Array.length > 0) {
      filteredFish.forEach((fish) =>
        createCard(
          fish.name,
          fish.sciName,
          fish.imgSrc,
          fish.imgAlt,
          fish.weight,
          fish.long,
          fish.lifespan,
          fish.region
        )
      );
    } else {
      this.insertAdjacentHTML
    }
  } catch (err) {
    console.log("search-error");
    document.getElementById("api-response").textContent = "oopsie woopsie :(";
  }
});

function createCard(
  name,
  sciName,
  imgSrc,
  imgAlt,
  weight,
  long,
  lifespan,
  region
) {
  DOMSelectors.list.insertAdjacentHTML(
    "beforeend",
    `
  <li class="fishCard">
      <h2 class="fish-name" >${name}</h2>
      <h3 class="fish-sci-name">${sciName}</h3>
      <img src="${imgSrc}" alt="${imgAlt}" class="img"></img>
      <p>Weight: ${weight}</p>
      <p>Length: ${long}</p>
      <p>Lifespan: ${lifespan}</p>
      <p>Region: ${region}</p>
  </li>
`
  );
}
