// JavaScript for toggling the mobile menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// JavaScript to close the mobile menu when scrolling
window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});
