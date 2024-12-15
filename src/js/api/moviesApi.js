// Funcții pentru obținerea datelor despre filme:
// fetchPopularMovies()
// fetchMovieById(id)
// searchMovies(query, page)

// Funcția pentru obținerea filmelor populare
import { BASE_URL, API_KEY } from './config.js';
import { fetchGenres } from './genresApi.js';

let genresCache = [];

async function getGenres() {
  if (genresCache.length === 0) {
    genresCache = await fetchGenres();
  }
  return genresCache;
}

export async function fetchPopularMovies() {
  const apiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    console.log('Fetching popular movies...');
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      console.error('No popular movies found:', data);
      return [];
    }

    const genres = await getGenres();
    console.log('Genres retrieved:', genres);

    const moviesWithGenres = data.results.map(movie => ({
      ...movie,
      genre_names: movie.genre_ids.map(
        id => genres.find(genre => genre.id === id)?.name || 'Unknown'
      ),
    }));

    console.log('Movies with genres:', moviesWithGenres);
    return moviesWithGenres;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}
