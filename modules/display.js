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
}
