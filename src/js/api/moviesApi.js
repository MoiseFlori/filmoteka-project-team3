
import { BASE_URL, API_KEY } from './config.js';
import { getGenres } from './genresApi.js';
import { currentPage } from '../components/pagination';

// Fetch popular movies
export async function fetchPopularMovies(page = currentPage) {
  const validatedPage = Math.min(Math.max(1, page), 500);
  const apiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${validatedPage}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return { results: [], total_pages: 0 };
    }

    const genres = await getGenres();
    const moviesWithGenres = data.results.map(movie => ({
      ...movie,
      genre_names: movie.genre_ids.map(
        id => genres.find(genre => genre.id === id)?.name || 'Unknown'
      ),
    }));

    return {
      results: moviesWithGenres,
      total_pages: Math.min(data.total_pages, 500),
    };
  } catch (error) {
    return { results: [], total_pages: 0 };
  }
}

// Search movies by query
export async function searchMovies(query, page = 1) {
  const validatedPage = Math.min(Math.max(1, page), 500);
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query,
    page: validatedPage,
    language: 'en-US',
    include_adult: false,
  });

  const apiUrl = `${BASE_URL}/search/movie?${searchParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.results) {
      return { results: [], total_pages: 0 };
    }

    const genres = await getGenres();
    const moviesWithGenres = data.results.map(movie => ({
      ...movie,
      genre_names:
        movie.genre_ids?.map(
          id => genres.find(genre => genre.id === id)?.name || 'Unknown'
        ) || [],
    }));

    return {
      results: moviesWithGenres,
      total_pages: data.total_pages,
    };
  } catch (error) {
    return { results: [], total_pages: 0 };
  }
}

// Fetch movie details by ID
export async function fetchMovieDetails(movieId) {
  const apiUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch movie details');
    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Fetch movie by ID
export async function fetchMovieById(id) {
  const apiUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch movie details');
    const data = await response.json();

    if (data.success === false) {
      return false;
    }

    return data;
  } catch (error) {
    return null;
  }
}

// Fetch trailer URL for a movie
export async function fetchTrailerUrl(movieId) {
  const apiUrl = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const trailer = data.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (error) {
    return null;
  }
}
