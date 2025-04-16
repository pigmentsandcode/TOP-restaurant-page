import "./styles.css";
import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { populateAbout } from "./about";

console.log("Correctly linked");

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
let activeBtn = homeBtn;
activeBtn.classList.add("active");

function handleNavClick(e) {
  contentDiv.removeChild(contentDiv.firstChild);

  activeBtn.classList.remove("active");
  if (e.target.id === "home-btn") {
    contentDiv.append(populateHome());
    homeBtn.classList.add("active");
  } else if (e.target.id === "menu-btn") {
    contentDiv.append(populateMenu());
    menuBtn.classList.add("active");
  } else {
    contentDiv.append(populateAbout());
    aboutBtn.classList.add("active");
  }
  activeBtn = e.target;
}

homeBtn.addEventListener("click", handleNavClick);
menuBtn.addEventListener("click", handleNavClick);
aboutBtn.addEventListener("click", handleNavClick);

contentDiv.append(populateHome());
