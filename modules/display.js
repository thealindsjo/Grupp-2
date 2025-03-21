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
    const popularButton = document.getElementById("popular-btn");
    const topRatedButton = document.getElementById("top-rated-btn");
    const container = document.querySelector(".row");

    container.innerHTML = ""; // Rensa innehållet innan ny visning
    movies.forEach(movie => {
        const movieElement = document.createElement("div");
  
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        img.alt = `${movie.title}`;
        img.classList.add('myImages');
        img.id = 'myImg';

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const rating = document.createElement('p');
        rating.textContent = movie.vote_average;

        movieElement.append(img, title, rating);
        
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
};

