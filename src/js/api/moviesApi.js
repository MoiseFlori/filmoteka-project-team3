// Funcții pentru obținerea datelor despre filme:
// fetchPopularMovies()
// fetchMovieById(id)
// searchMovies(query, page)
import { BASE_URL, API_KEY } from './config.js';

// Funcția pentru obținerea filmelor populare
export async function fetchPopularMovies() {
  const apiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Eroare la API:', error);
    return [];
  }
}
