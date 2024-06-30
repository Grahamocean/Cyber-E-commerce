const menuBar = document.getElementById("menu-icon");
const menuContainer = document.getElementById("mobile_menu_container");

menuBar.addEventListener("click", () => {
  menuContainer.style.display = "flex";
});
