import { API_TOKEN } from './api_token.js';
 import { displayMovies } from './display.js';

const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const containerDiv = document.querySelector('.container');

if (document.body.id === 'movies') {
    import("./api_calls_movies.js").then(module => {
        const { fetchPopularMovies, fetchTopRatedMovies, fetchSearchMovies } = module;

        const popularBtn = document.querySelector('#popular-button');
        const topRatedBtn = document.querySelector('#top-rated-button');
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
        });

        topRatedBtn.addEventListener('click', async () => {
            const topRatedMovies = await fetchTopRatedMovies(options);
        });

        

        // searchField.addEventListener('submit', async (event) => {

        //     const searchInput = event.target.value.trim();
        //     const searchResults = await fetchSearchMovies(options, searchInput);


        // });
    })
    .catch(error => console.error("Error loading module:", error));

};