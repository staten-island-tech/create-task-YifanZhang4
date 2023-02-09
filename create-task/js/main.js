import "../styles/style.css";
import "./api";
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

const searchFish = async() => {
    try {
        const data = await findFish();
        const searchString = e.target.value;
        console.log(searchString);
        const filteredFish = fish.filter((fish) => {
          return (
            fish.name.toLowerCase().includes(searchString) ||
            fish.class.toLowerCase().includes(searchString)
          );
        });
    } catch (err) {
        console.log("ERROR");
        document.getElementById("api-response").textContent = "oopsie woopsie :(";
      }
};

