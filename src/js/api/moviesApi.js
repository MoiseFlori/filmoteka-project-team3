// Funcții pentru obținerea datelor despre filme:
// fetchPopularMovies()
// fetchMovieById(id)
// searchMovies(query, page)

// Funcția pentru obținerea filmelor populare
import { BASE_URL, API_KEY } from './config.js';
import { getGenres } from './genresApi.js';
import { currentPage } from '../components/pagination';

export async function fetchPopularMovies() {
  const apiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;

  try {
    // console.log('Fetching popular movies...');
    const response = await fetch(apiUrl);
    const data = await response.json();

    // console.log(data);

    if (!data.results || data.results.length === 0) {
      console.error('No popular movies found:', data);
      return [];
    }

    const genres = await getGenres();
    // console.log('Genres retrieved:', genres);

    const moviesWithGenres = data.results.map(movie => ({
      ...movie,
      genre_names: movie.genre_ids.map(
        id => genres.find(genre => genre.id === id)?.name || 'Unknown'
      ),
    }));

    // console.log('Movies with genres:', moviesWithGenres);
    return moviesWithGenres;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}

export async function fetchMovieDetails(movieId) {
  const MOVIE_DETAIL_URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  try {
    console.log(`Fetching details for movie ID: ${movieId}`);
    const response = await fetch(MOVIE_DETAIL_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    console.log('Movie details fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

export async function searchMovies(query, page) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: query,
    page: page,
    language: 'en-US',
    include_adult: false,
  });

  const apiUrl = `${BASE_URL}/search/movie?${searchParams}`;

  try {
    console.log(`searchMovies(${query},${page}) with URL: ${apiUrl}`);
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.results) {
      console.warn('Invalid response or no results.');
      return { results: [] }; // Returnăm un obiect gol
    }

    return data; // Returnează datele corect
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { results: [] }; // Returnează un fallback
  }
}

// export async function fetchMovieById(id)

export async function fetchMovieById(id) {
  const apiUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    console.log(`fetchMovieById(${id}) with URL: ${apiUrl}`);
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }

    const data = await response.json();

    if (data.success === false) {
      console.error('The resource you requested could not be found.');
      return false;
    }

    return data;
  } catch (error) {
    console.error('Error fetching movie by Id:', error);
    return [];
  }
}

export async function fetchTrailerUrl(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    const trailer = data.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (error) {
    console.error('Error fetching trailer URL:', error);
    return null;
  }
}
