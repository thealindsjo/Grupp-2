import { fetchPopularMovies, fetchTopRatedMovies, fetchSearchMovies } from "./api_calls_movies.js";
export function displayTvSeries(tvSeries) {
    const container = document.querySelector("#tv-shows");
    container.innerHTML = ""; // Rensa innehållet innan ny visning
    tvSeries.forEach(tvShow => {
        const tvShowElement = document.createElement("li");
        tvShowElement.classList.add("tv-show");
        tvShowElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${tvShow.poster_path}" alt="${tvShow.name}">
            <h3>${tvShow.name}</h3>
            <p>Rating: ${tvShow.vote_average}</p>
        `;
        container.appendChild(tvShowElement);
    });
}

export function displayMovies(movies) {

document.addEventListener("DOMContentLoaded", async () => {
    const popularButton = document.getElementById("popular-button");
    const topRatedButton = document.getElementById("top-rated-button");
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Rensa innehållet innan ny visning
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
})};

