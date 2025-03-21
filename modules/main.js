import { API_TOKEN } from './api_token.js';
import { displayMovies,displayTvSeries } from './display.js';
import { initModal } from './modal.js';

initModal();

const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const containerDiv = document.querySelector('.container');

if (document.body.id === 'movies') {
    import("./api_calls_movies.js").then(module => {
        const { fetchPopularMovies, fetchTopRatedMovies, fetchSearchMovies } = module;

        const popularBtn = document.querySelector('#popular-btn');
        const topRatedBtn = document.querySelector('#top-rated-btn');
        const searchField = document.querySelector('#search-field');
       

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        };

        popularBtn.addEventListener('click', async () => {
            const popularMovies = await fetchPopularMovies(options);
            displayMovies(popularMovies);
            initModal();
        });

        topRatedBtn.addEventListener('click', async () => {
            const topRatedMovies = await fetchTopRatedMovies(options);
            displayMovies(topRatedMovies);
            initModal();
        });

        

        // searchField.addEventListener('submit', async (event) => {

        //     const searchInput = event.target.value.trim();
        //     const searchResults = await fetchSearchMovies(options, searchInput);


        // });
    })
    .catch(error => console.error("Error loading module:", error));

};

if (document.body.id === 'tvSeries') {
    import("./api_calls_tv.js").then(module => {
        const { fetchPopularTvSeries, fetchTopRatedTvSeries } = module;

        const popularBtn = document.querySelector('#popular-btn');
        const topRatedBtn = document.querySelector('#top-rated-btn');

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        };

        popularBtn.addEventListener('click', async () => {
            const popularSeries = await fetchPopularTvSeries(options);
            displayTvSeries(popularSeries);
        });

        topRatedBtn.addEventListener('click', async () => {
            const topRatedSeries = await fetchTopRatedTvSeries(options);
            displayTvSeries(topRatedSeries);
        });

    }).catch(error => console.error("Error loading TV module:", error));
}