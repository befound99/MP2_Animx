// Declared variables
const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

function openTab(event, tabName) {
  // Hide all tab contents
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tab links
  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to the clicked tab link
  event.currentTarget.classList.add("active");
}

// Set the default tab to be opened
document.getElementById("tab1").classList.add("active");
document.querySelector(".tablinks:first-child").classList.add("active");

// Event listener for each tab link
tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    openTab(event, link.getAttribute("data-tab"));
  });
});
