const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

if (document.body.id === 'movies') {
    import('./movies.js')
        .catch(error => console.error("Error loading Movies module:", error));
}

if (document.body.id === 'tvSeries') {
    import("./tvSeries.js")
    .catch(error => console.error("Error loading TV module:", error));
}

   

