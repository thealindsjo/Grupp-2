import { API_TOKEN } from './api_token.js';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
    }
};

export async function fetchPopularMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

        console.log(response);

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();

        console.log(data);

        return data.results;
    } 
    catch (error) {
        console.error(error);
    } 
}

export async function fetchTopRatedMovies() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);

        console.log(response);

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();

        console.log(data);

        return data.results;
    } 
    catch (error) {
        console.error(error);
    }
}

export async function fetchSearchMovies(searchInput) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchInput)}&include_adult=true&language=en-US&page=1`, options);
        
        console.log(response);

        if(!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);        
        }

        const data = await response.json();

        console.log(data);

        return data.results;
    }
    catch (error) {
        console.error(error);
    } 
}