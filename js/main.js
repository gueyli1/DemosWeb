
const btnMenu = document.querySelector(".btn-menu");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".close-menu");


btnMenu.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    btnMenu.setAttribute("aria-expanded", isOpen);
    btnMenu.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");

});

// definir la funcion de cierre
const closeMenuFunction = () => {
    navLinks.classList.remove("is-open");
    btnMenu.setAttribute("aria-expanded", "false");
    btnMenu.setAttribute("aria-label", "Abrir menú");
};

// cerrar el menu al dar clic en escape usar el keydown event
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenuFunction();
    }
});

// cerrar el menu al dar clic fuera del menu
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !btnMenu.contains(event.target)) {
        closeMenuFunction();
    }
});