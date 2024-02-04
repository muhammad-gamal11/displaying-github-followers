import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";
import get from "./get.js";

const title = get(".section-title h1");
const buttonContainer = get(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(buttonContainer, pages, index);
};

const initiate = async () => {
  const followers = await fetchFollowers();
  //   console.log(followers);
  //   displayFollowers(paginate(followers)[0]);
  title.textContent = "Displaying Followers";
  pages = paginate(followers);
  setupUI();
};

//adding buttons functionality
buttonContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-btn")) {
    // console.log(e.target.dataset.index);
    index = parseInt(e.target.dataset.index);
  }
  // next button
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  // prev button
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener("load", initiate);
