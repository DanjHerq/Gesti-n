const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const content = document.querySelector(".content");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    content.classList.toggle("active");
});
