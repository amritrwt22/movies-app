//will write functions for calling api's
const API_KEY = "9f787f38e2ccd97e05037b22ced398a2";
const BASE_URL = "https://api.themoviedb.org/3"
//we will send request to this base url using /search or /popular
//we are gonna use 2 operations only - searching and displaying most popular movies today

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch (
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );

    const data =await response.json();
    return data.results;
}


