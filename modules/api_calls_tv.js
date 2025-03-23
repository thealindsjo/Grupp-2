export async function fetchTopRatedTvSeries(options) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);

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

export async function fetchPopularTvSeries(options) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options);

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
}export async function fetchSearchTvSeries(options, query) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&language=en-US&page=1`, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}
