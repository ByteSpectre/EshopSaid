const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navbar.addEventListener("click", function () {
    navbar.classList.toggle("active");
});