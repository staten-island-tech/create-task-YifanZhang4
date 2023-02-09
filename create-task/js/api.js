import { DOMSelectors } from "./dom";

const findFish = async () => {
  try {
    const res = await fetch(`https://www.fishwatch.gov/api/species`);
    if (res.status < 200 || res.status > 299) {
      throw Error(res.status);
    } else {
      const fishlist = await res.json();
      console.log(fishlist);
      return fishlist;
    }
  } catch (err) {
    console.log("ERROR");
    DOMSelectors.api.textContent = "Something went wrong, please try again.";
  }
};

findFish();
export { findFish };
console.log("api connected");
