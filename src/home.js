import slushImg from "./slush.jpg";

export function populateHome() {
  const homeDivEl = document.createElement("div");
  homeDivEl.id = "home-content";

  const nameEl = document.createElement("h1");
  nameEl.textContent = "A Snowball's Chance";
  homeDivEl.appendChild(nameEl);

  const mainImg = document.createElement("img");
  mainImg.src = slushImg;
  homeDivEl.appendChild(mainImg);

  const taglineEl = document.createElement("h2");
  taglineEl.textContent = "Not your ordinary snocone";
  homeDivEl.appendChild(taglineEl);

  const descriptEl = document.createElement("p");
  const textNode = document.createTextNode(
    "Creative combos that delight the tastebuds and the eyes! Carefully crafted for your enjoyment!"
  );
  descriptEl.appendChild(textNode);
  homeDivEl.appendChild(descriptEl);

  return homeDivEl;
}
