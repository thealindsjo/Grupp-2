document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.querySelector(".toggleMenu");
    const menu = document.querySelector(".menu");

    if (toggleMenu && menu) {
        toggleMenu.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});
