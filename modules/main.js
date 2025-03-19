import { API_TOKEN } from './api_token.js';

// const toggleMenu = document.querySelector(".toggleMenu");
// const menu = document.querySelector(".menu");

// toggleMenu.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });

if (document.body.id === 'movies') {
    console.log('found movies');

    import("./api_calls_movies.js").then(module => {
        const { fetchTopRatedMovies, fetchPopularMovies, fetchSearchMovies } = module;

        const popularBtn = document.querySelector('#popular-button');
        const topRatedBtn = document.querySelector('#top-rated-button');

        popularBtn.addEventListener('click', async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_TOKEN}`
                }
            };
            const popularMovies = await fetchPopularMovies(options);
        });

        topRatedBtn.addEventListener('click', async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_TOKEN}`
                }
            };
            const topRatedMovies = await fetchTopRatedMovies(options);
        });
    }).catch(error => console.error("Error loading module:", error));

};