import { initModal } from './modal.js';

export function displayTvSeries(tvSeries, contentContainer) {
    contentContainer.innerHTML = "";

    tvSeries.forEach(tvShow => {
        const tvShowElement = document.createElement("div");
        tvShowElement.classList.add('myContent');

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w200${tvShow.poster_path}`;
        img.alt = `${tvShow.title}`;
        img.classList.add('modalImages');

        const title = document.createElement('h3');
        title.textContent = tvShow.name;

        const rating = document.createElement('p');
        rating.textContent = tvShow.vote_average;

        tvShowElement.append(img, title, rating);

        contentContainer.appendChild(tvShowElement);
    });

    initModal();
};

export function displayMovies(movies, contentContainer) {
    contentContainer.innerHTML = "";
    
    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add('myContent');
  
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        img.alt = `${movie.title}`;
        img.classList.add('modalImages');

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const rating = document.createElement('p');
        rating.textContent = movie.vote_average;

        movieElement.append(img, title, rating);
        
        contentContainer.appendChild(movieElement);
    });

    initModal();
};