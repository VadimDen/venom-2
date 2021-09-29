const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
  console.log("Is Open")
  menu.classList.add("is-open");
  menuCloseButton.classList.add("is-open");
});
menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuCloseButton.classList.remove("is-open");
});