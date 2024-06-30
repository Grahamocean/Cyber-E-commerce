const menuBar = document.getElementById("menubar");
const closeBar = document.getElementById("closeMenu");
const menuContainer = document.getElementById("mobile_menu_container");

menuBar.addEventListener("click", () => {
  menuContainer.style.display = "flex";
  menuBar.style.display = "none";
  closeBar.style.display = "flex";
});

closeBar.addEventListener("click", () => {
  menuContainer.style.display = "none";
  menuBar.style.display = "flex";
  closeBar.style.display = "none";
});
