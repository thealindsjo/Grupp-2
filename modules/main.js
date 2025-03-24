const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".menu");

if(document.body.id != 'index'){
    toggleMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


if (document.body.id === 'movies') {
    import('./movies.js')
        .catch(error => console.error("Error loading Movies module:", error));
}

if (document.body.id === 'tvSeries') {
    import('./tvSeries.js')
        .catch(error => console.error("Error loading TV module:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check user preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "Light Mode☀️";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "Light Mode☀️ ";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "Dark Mode🌙";
        }
    });
});