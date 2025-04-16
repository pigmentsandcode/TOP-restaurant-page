export function populateAbout() {
  const aboutDivEl = document.createElement("div");
  aboutDivEl.id = "about-content";

  const titleEl = document.createElement("h1");
  titleEl.textContent = "About Us";
  aboutDivEl.appendChild(titleEl);

  const aboutPEl = document.createElement("p");
  aboutPEl.classList.add("about-para");
  aboutPEl.textContent =
    "This is not your ordinary snow cone stand. Meet Jake- we don’t just make snow cones- we create EPIC experiences for everyone.  We are a small business with a big heart for our local community.";
  aboutDivEl.appendChild(aboutPEl);
  return aboutDivEl;
}
