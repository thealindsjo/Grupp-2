function toggleMenu() {
    console.log("Toggle menu clicked");
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
    }