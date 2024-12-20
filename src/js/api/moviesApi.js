// Funcții pentru obținerea datelor despre filme:
// fetchPopularMovies()
// fetchMovieById(id)
// searchMovies(query, page)

// Funcția pentru obținerea filmelor populare
import { BASE_URL, API_KEY } from './config.js';
import { getGenres } from './genresApi.js';
import { currentPage } from '../components/pagination';

export async function fetchPopularMovies(page = currentPage) {
  const validatedPage = Math.min(Math.max(1, page), 500);
  console.log('Fetching popular movies for page:', validatedPage);
  const apiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      console.error('No popular movies found:', data);
      return { results: [], total_pages: 0 };
    }

    const genres = await getGenres();
    const moviesWithGenres = data.results.map(movie => ({
      ...movie,
      genre_names: movie.genre_ids.map(
        id => genres.find(genre => genre.id === id)?.name || 'Unknown'
      ),
    }));

    const total_pages = Math.min(data.total_pages, 500);

    return {
      results: moviesWithGenres,
      total_pages,
    };
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return { results: [], total_pages: 0 };
  }
}

export async function searchMovies(query, page = 1) {
  const validatedPage = Math.min(Math.max(1, page), 500);
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: query,
    page: page,
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

    const total_pages = Math.min(data.total_pages, 500);
    
    return {
      results: moviesWithGenres,
      total_pages: data.total_pages, // Eliminăm limitarea la 20 de pagini
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { results: [], total_pages: 0 };
  }
}

export async function fetchMovieDetails(movieId) {
  const MOVIE_DETAIL_URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(MOVIE_DETAIL_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

export async function fetchMovieById(id) {
  const apiUrl = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

  try {
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
    return null;
  }
}

export async function fetchTrailerUrl(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
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
