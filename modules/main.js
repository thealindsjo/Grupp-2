const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

if (document.body.id === 'movies') {
    import('./movies.js')
        .catch(error => console.error("Error loading Movies module:", error));
}

if (document.body.id === 'tvSeries') {
    import("./api_calls_tv.js").then(module => {
        const { fetchPopularTvSeries, fetchTopRatedTvSeries, fetchSearchTvSeries } = module;

        const popularBtn = document.querySelector('#popular-btn');
        const topRatedBtn = document.querySelector('#top-rated-btn');
        const searchForm = document.querySelector('#search-form');
        const searchInput = document.querySelector('#search-input');

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

        searchForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query !== "") {
                const searchResults = await fetchSearchTvSeries(options, query);
                displayTvSeries(searchResults);
            }
        });

    }).catch(error => console.error("Error loading TV module:", error));
}

    import('./tvSeries.js')
        .catch(error => console.error("Error loading TV module:", error));
}
