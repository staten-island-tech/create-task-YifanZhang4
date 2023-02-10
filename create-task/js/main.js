import "../styles/style.css";
import { findFish } from "./api";
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

DOMSelectors.search.addEventListener("keyup", async function (e) {
  try {
    e.preventDefault();
    const data = await findFish();
    const searchString = e.target.value;
    console.log(searchString);
    const filteredFish = data.filter((fish) => {
      return fish["Species Name"].toLowerCase().includes(searchString);
    });
    createCard(filteredFish);
  } catch (err) {
    console.log("search-error");
    document.getElementById("api-response").textContent = "oopsie woopsie :(";
  }
});

async function mappingFish() {
  const data = await findFish();
  const fishmap = data.map(function (fish) {
    return fish["Species Name"];
  });
  console.log(fishmap);
  return fishmap;
}

mappingFish();

function createCard(fish) {
  let name = DOMSelectors.list.insertAdjacentHTML(
    "beforeend",
    `
  <li class="fishCard">
      <h2 class="fish-name" >${name}</h2>
      <h3 class="fish-sci-name">${fish["Scientific Name"]}</h3>
      <img src="${fish["Species Illustration Photo"].src}" alt="${fish["Species Illustration Photo"].alt}" class="img"></img>
  </li>
`
  );
}

// const f = async () => {
//   const data = await findFish();
//   data.forEach((fish) => console.log(fish["Species Name"]));
// };

// f();
