import { searchMovies, fetchPopularMovies } from '../api/moviesApi';
import { updatePageButtons, currentPage } from './pagination';
import { currentSearchQuery } from './searchBar';
import { gallery } from './refs';
import { initializeModal } from '../components/modal';

export function generateMovieHTML(movie) {
  let ratingClass = 'movie__average--red';
  if (movie.vote_average >= 7) ratingClass = 'movie__average--green';
  else if (movie.vote_average >= 5) ratingClass = 'movie__average--orange';

  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : './images/no-image-available.jpg';

  const altText = movie.poster_path
    ? `${movie.title || ''} movie poster`
    : 'No poster available';

  const genresArray = movie.genre_names || [];
  let displayedGenres = genresArray.slice(0, 2);
  if (genresArray.length > 2) {
    displayedGenres.push('Other');
  }

  const genres = genresArray.length > 0 ? displayedGenres.join(', ') : '';
  const rating =
    movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : '';
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : '';

  return `
    <li class="movie_list_item" data-movie-id="${movie.id || ''}">
      <div class="movie__cover-inner">
        <img 
          class="movie__cover" 
          src="${moviePoster}" 
          alt="${altText}" 
        />
      </div>
      <div class="movie__cover--darkened"></div>
      <div class="movie-info">
        ${movie.title ? `<h3 class="movie-title">${movie.title}</h3>` : ''}
        ${
          genres || releaseYear
            ? `<p class="movie-date">${[genres, releaseYear]
                .filter(Boolean)
                .join(' | ')}</p>`
            : ''
        }
        ${
          rating
            ? `<div class="movie__average ${ratingClass}">${rating}</div>`
            : ''
        }
      </div>
    </li>
  `;
}

function getMoviesPerPage() {
  const width = window.innerWidth;
  if (width >= 1024) return 18;
  if (width >= 768) return 18;
  return 4;
}

export async function renderSearchedMovies(query, page) {
  try {
    const { results, total_pages } = await searchMovies(query, page);

    if (!results || results.length === 0) {
      gallery.innerHTML = '<p>No movies found.</p>';
      updatePageButtons(0); // Hide pagination when no results
      return;
    }

    const moviesPerPage = getMoviesPerPage();
    const moviesToShow = results.slice(0, moviesPerPage);
    const moviesHTML = moviesToShow.map(generateMovieHTML).join('');
    gallery.innerHTML = moviesHTML;

    // Update pagination with the actual number of pages from search results
    updatePageButtons(total_pages);
  } catch (error) {
    console.error('Error displaying searched movies:', error);
    gallery.innerHTML = '<p>Error loading movies.</p>';
    updatePageButtons(0);
  }
}
export async function renderMovies(page = 1) {
  console.log('Rendering movies for page:', page);
  try {
    const { results, total_pages } = await fetchPopularMovies(page);

    if (!results || results.length === 0) {
      console.warn('No movies found');
      gallery.innerHTML = '<p>No movies found.</p>';
      updatePageButtons(0);
      return;
    }

    console.log('Movies fetched:', results.length);
    const moviesPerPage = getMoviesPerPage();
    const moviesToShow = results.slice(0, moviesPerPage);
    const moviesHTML = moviesToShow.map(generateMovieHTML).join('');

    if (gallery) {
      gallery.innerHTML = moviesHTML;
      updatePageButtons(total_pages);

      gallery.addEventListener('click', event => {
        const movieItem = event.target.closest('.movie_list_item');
        if (!movieItem) return;

        const movieId = movieItem.dataset.movieId;
        if (movieId) {
          console.log('Clicked movie ID:', movieId);
          initializeModal(movieId);
        } else {
          console.error('Movie ID not found in clicked item');
        }
      });
    } else {
      console.error('Gallery element not found');
    }
  } catch (error) {
    console.error('Error displaying movies:', error);
    if (gallery) {
      gallery.innerHTML = '<p>Error loading movies.</p>';
    }
    updatePageButtons(0);
  }
}

// Add resize listener to handle responsive layout
window.addEventListener('resize', () => {
  if (gallery.children.length > 0) {
    // Re-render current page when window is resized
    if (currentSearchQuery) {
      renderSearchedMovies(currentSearchQuery, currentPage);
    } else {
      renderMovies(currentPage);
    }
  }
});
