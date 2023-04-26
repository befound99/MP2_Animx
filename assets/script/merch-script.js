// JS FOR THE TABS FUNCTIONALITY

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll("[class^='tab-content']");

function openTab(event, tabName) {

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");

  event.currentTarget.classList.add("active");
}

document.querySelector("[class^='tab-content'].active").classList.add("active");
document.querySelector(".tab-links:first-child").classList.add("active");

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    openTab(event, link.getAttribute("data-tab"));
  });
});


// JS FOR FILTER SERIES FUNCTIONALITY












