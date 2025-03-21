import { API_TOKEN } from './api_token.js';
import { displayMovies, displayTvSeries } from './display.js';

const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

if (document.body.id === 'movies') {
    import("./api_calls_movies.js").then(module => {
        const { fetchPopularMovies, fetchTopRatedMovies, fetchSearchMovies } = module;

        const contentContainer = document.querySelector('#contentContainer');
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
            displayMovies(popularMovies, contentContainer);
        });

        topRatedBtn.addEventListener('click', async () => {
            const topRatedMovies = await fetchTopRatedMovies(options);
            displayMovies(topRatedMovies, contentContainer);
        });

        const delay = 300;
        let timer;

        searchField.addEventListener('input', async (event) => {
            const searchInput = event.target.value.trim();
            
            clearTimeout(timer);
            timer = setTimeout(async () => {
                
            const searchedMovies = await fetchSearchMovies(options, searchInput)
            displayMovies(searchedMovies, contentContainer);
            }, delay);
        })

    })
    .catch(error => console.error("Error loading module:", error));

};

if (document.body.id === 'tvSeries') {
    import("./api_calls_tv.js").then(module => {
        const { fetchPopularTvSeries, fetchTopRatedTvSeries, fetchSearchTvSeries } = module;

        const contentContainer = document.querySelector('#contentContainer');
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
            const popularSeries = await fetchPopularTvSeries(options);
            displayTvSeries(popularSeries, contentContainer);
        });

        topRatedBtn.addEventListener('click', async () => {
            const topRatedSeries = await fetchTopRatedTvSeries(options);
            displayTvSeries(topRatedSeries, contentContainer);
        });

      
        const delay = 300;
        let timer;

        searchField.addEventListener('input', async (event) => {
            const searchInput = event.target.value.trim();
            
            clearTimeout(timer);
            timer = setTimeout(async () => {
                
            const searchedSeries = await fetchSearchTvSeries(options, searchInput)
            displayMovies(searchedSeries, contentContainer);
            }, delay);
        })

    }).catch(error => console.error("Error loading TV module:", error));
}