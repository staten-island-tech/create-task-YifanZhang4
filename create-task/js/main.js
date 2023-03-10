import "../styles/style.css";
import { fishList } from "./list";
import { DOMSelectors } from "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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

DOMSelectors.enter.addEventListener("click", function (e) {
  e.preventDefault();
  const data = fishList;
  const searchString = DOMSelectors.search.value;
  if (searchString === "all") {
    console.log(searchString);
    data.forEach((fish) =>
      feesh.createCard(
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
    console.log(searchString);
    const lowerSS = searchString.toLowerCase();
    const filteredFish = data.filter((fish) => {
      return fish.name.toLowerCase().includes(lowerSS);
    });
    console.log(filteredFish);
    if (Array.length > 0) {
      console.log("fish found :)");
      console.log(Array.length);
      feesh.delete();
      filteredFish.forEach((fish) =>
        feesh.createCard(
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
    }
  }
});

DOMSelectors.random.addEventListener("click", function (e) {
  e.preventDefault();
  const data = fishList;
  const rand = data[Math.floor(Math.random() * data.length)];
  console.log(rand.name);
  feesh.delete();
  feesh.createCard(
    rand.name,
    rand.sciName,
    rand.imgSrc,
    rand.imgAlt,
    rand.weight,
    rand.long,
    rand.lifespan,
    rand.region
  );
});

const feesh = {
  createCard: function (
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
  <div class="fishCard" data-aos="zoom-in">
      <h2 class="fish-name">${name}</h2>
      <h3 class="fish-sci-name">${sciName}</h3>
      <img src="${imgSrc}" alt="${imgAlt}" class="img"></img>
      <p>Weight: ${weight}</p>
      <p>Length: ${long}</p>
      <p>Lifespan: ${lifespan}</p>
      <p>Region: ${region}</p>
  </div>
`
    );
  },
  delete: function () {
    const cards = document.querySelectorAll(".fishCard");
    cards.forEach((card) => {
      card.remove();
    });
  },
};

console.log(fishList.length);