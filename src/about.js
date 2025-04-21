import fakeJake from "./fakeJake.jpg";

export function populateAbout() {
  const aboutDivEl = document.createElement("div");
  aboutDivEl.id = "about-content";

  const titleEl = document.createElement("h1");
  titleEl.textContent = "About Us";
  aboutDivEl.appendChild(titleEl);

  const jakeImg = document.createElement("img");
  jakeImg.src = fakeJake;
  aboutDivEl.appendChild(jakeImg);

  const aboutPEl = document.createElement("p");
  aboutPEl.classList.add("about-para");
  aboutPEl.textContent =
    "This is not your ordinary snow cone stand. Meet Jake- we don’t just make snow cones- we create EPIC experiences for everyone.  We are a small business with a big heart for our local community.";
  aboutDivEl.appendChild(aboutPEl);

  const creditsDiv = document.createElement("div");
  creditsDiv.classList.add("credits-para");
  const slushCredit = document.createElement("p");
  slushCredit.innerHTML = `Sno Cone Image (home page) by <a href="https://pixabay.com/users/dr_gomz-2179524/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1244640">Kathryn Loydall</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1244640">Pixabay</a>`;
  creditsDiv.appendChild(slushCredit);
  const jakeCredit = document.createElement("p");
  jakeCredit.innerHTML = `Man Photo (about page) by <a href="https://unsplash.com/@switchinglanes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Deepthi Clicks</a> on <a href="https://unsplash.com/photos/a-man-with-curly-hair-and-a-frilly-around-his-neck-u6kBIHwqWhs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;
  creditsDiv.appendChild(jakeCredit);
  aboutDivEl.appendChild(creditsDiv);
  return aboutDivEl;
}
