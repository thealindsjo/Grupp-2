import { displayMovies } from './display.js';
import { fetchPopularMovies, fetchTopRatedMovies, fetchSearchMovies } from './api_calls_movies.js';

const contentContainer = document.querySelector('#contentContainer');
const popularBtn = document.querySelector('#popular-btn');
const topRatedBtn = document.querySelector('#top-rated-btn');
const searchField = document.querySelector('#search-field');

popularBtn.addEventListener('click', async () => {
    const popularMovies = await fetchPopularMovies();
    displayMovies(popularMovies, contentContainer);
});

topRatedBtn.addEventListener('click', async () => {
    const topRatedMovies = await fetchTopRatedMovies();
    displayMovies(topRatedMovies, contentContainer);
});

const delay = 300;
let timer;

searchField.addEventListener('input', async (event) => {
    const searchInput = event.target.value.trim();

    clearTimeout(timer);
    timer = setTimeout(async () => {
        const searchedMovies = await fetchSearchMovies(searchInput);
        displayMovies(searchedMovies, contentContainer);
    }, delay);
});