import { API_TOKEN } from './api_token.js';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
    }
};

export async function fetchTopRatedTvSeries() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);

        console.log("Response from fetchTopRatedTvSeries:", response);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Top Rated TV Series Data:", data);

        return data.results;
    } catch (error) {
        console.error("Error fetching top-rated TV series:", error);
    }
}

export async function fetchPopularTvSeries() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options);

        console.log("Response from fetchPopularTvSeries:", response);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Popular TV Series Data:", data);

        return data.results;
    } catch (error) {
        console.error("Error fetching popular TV series:", error);
    }
}

export async function fetchSearchTvSeries(searchInput) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(searchInput)}&include_adult=true&language=en-US&page=1`,
            options
        );

        console.log("Response from fetchSearchTvSeries:", response);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched TV Series Search Data:", data);

        return data.results;
    } catch (error) {
        console.error("Error fetching searched TV series:", error);
    }
}
