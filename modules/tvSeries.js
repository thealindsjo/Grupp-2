import { displayTvSeries } from './display.js';
import { fetchPopularTvSeries, fetchTopRatedTvSeries, fetchSearchTvSeries } from './api_calls_tv.js';

const contentContainer = document.querySelector('#contentContainer');
const popularBtn = document.querySelector('#popular-btn');
const topRatedBtn = document.querySelector('#top-rated-btn');
const searchField = document.querySelector('#search-field');

popularBtn.addEventListener('click', async () => {
    const popularSeries = await fetchPopularTvSeries();
    displayTvSeries(popularSeries, contentContainer);
});

topRatedBtn.addEventListener('click', async () => {
    const topRatedSeries = await fetchTopRatedTvSeries();
    displayTvSeries(topRatedSeries, contentContainer);
});

const delay = 300;
let timer;

searchField.addEventListener('input', async (event) => {
    const searchInput = event.target.value.trim();

    clearTimeout(timer);
    timer = setTimeout(async () => {
        const searchedSeries = await fetchSearchTvSeries(searchInput);
        displayTvSeries(searchedSeries, contentContainer);
    }, delay);
});
