export async function fetchPopularMovies(options) {
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

export async function fetchTopRatedMovies(options) {
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

export async function fetchSearchMovies(options, searchInput) {
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