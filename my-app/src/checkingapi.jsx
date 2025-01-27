const API_KEY = "6dc321a506410cc1c6c5b17ef8334789";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Popular Movies Data:", data);
      return data.results || []; // Adjust to match your API response structure
    } catch (err) {
      console.error("Error fetching popular movies:", err);
      throw err; // Re-throw error to be caught in Home.js
    }
  };
  