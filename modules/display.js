import { fetchPopularMovies, fetchTopRatedMovies } from './api-calls-movies.js';

document.addEventListener("DOMContentLoaded", async () => {
    const popularButton = document.getElementById("popular-button");
    const topRatedButton = document.getElementById("top-rated-button");
    const container = document.querySelector(".container");

    // Funktion för att visa filmer på sidan
    function displayMovies(movies) {
        container.innerHTML = ""; // Rensa innehåll innan ny visning
        movies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            movieElement.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Rating: ${movie.vote_average}</p>
            `;

            container.appendChild(movieElement);
        });
    }

    // Hämta och visa populära filmer
    popularButton.addEventListener("click", async () => {
        const options = { headers: { Authorization: `Bearer ${API_TOKEN}` } };
        const movies = await fetchPopularMovies(options);
        displayMovies(movies);
    });

    // Hämta och visa topprankade filmer
    topRatedButton.addEventListener("click", async () => {
        const options = { headers: { Authorization: `Bearer ${API_TOKEN}` } };
        const movies = await fetchTopRatedMovies(options);
        displayMovies(movies);
    });
});
