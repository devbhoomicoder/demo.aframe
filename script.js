// You can add JavaScript code here to handle any additional functionality for the navigation, such as adding active states or smooth scrolling.
// Get the current page URL
var currentPage = window.location.href;

// Get all the navigation links
var navLinks = document.querySelectorAll(".nav-link");

// Loop through each link and check if it matches the current page
navLinks.forEach(function (link) {
  if (link.href === currentPage) {
    link.classList.add("active");
  }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 's')) {
    event.preventDefault();
  }
});