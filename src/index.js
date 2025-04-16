import "./styles.css";
import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { populateAbout } from "./about";

console.log("Correctly linked");

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

function handleNavClick(e) {
  contentDiv.removeChild(contentDiv.firstChild);
  if (e.target.id === "home-btn") {
    contentDiv.append(populateHome());
  } else if (e.target.id === "menu-btn") {
    contentDiv.append(populateMenu());
  } else {
    contentDiv.append(populateAbout());
  }
}

homeBtn.addEventListener("click", handleNavClick);
menuBtn.addEventListener("click", handleNavClick);
aboutBtn.addEventListener("click", handleNavClick);

contentDiv.append(populateHome());
