// Generating and displaying the list of movies.

import { fetchPopularMovies } from '../api/moviesApi'; // Importă funcția de API
import { currentPage, defineResultsPerPage } from '../components/pagination';


export function generateMovieHTML(movie) {
  let ratingClass = 'movie__average--red';
  if (movie.vote_average >= 7) ratingClass = 'movie__average--green';
  else if (movie.vote_average >= 5) ratingClass = 'movie__average--orange';

  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : './images/no-image-available.jpg';

  const altText = movie.poster_path
    ? `${movie.title} movie poster`
    : `No poster available for ${movie.title}`;

  if (typeof movie.genre_names === 'undefined') movie.genre_names = [];

  let displayedGenres = movie.genre_names.slice(0, 2);
  if (movie.genre_names.length > 2) {
    displayedGenres.push('Other');
  }

  const genres = displayedGenres.join(', ');

  return `
    <li class="movie_list_item" data-movie-id="${movie.id}">
      <div class="movie__cover-inner">
        <img 
          class="movie__cover" 
          src="${moviePoster}" 
          alt="${altText}" 
        />
      </div>
      <div class="movie__cover--darkened"></div>
        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-date">${genres} | ${new Date(
              movie.release_date
            ).getFullYear()}</p>
                  <div class="movie__average ${ratingClass}">
                    ${movie.vote_average.toFixed(1)}
          </div>
      </div>
    </li>
  `;
}

// Funcția pentru afișarea filmelor
export async function renderMovies() {
  try {
    // console.log('page', currentPage);
    // console.log('Apelare la funcția renderMovies...');
    const movies = await fetchPopularMovies();
    const galleryElement = document.querySelector('.movies');

    if (!movies || movies.length === 0) {
      console.error('Niciun film pentru afișare.');
      galleryElement.innerHTML = '<p>No movies found.</p>';
      return;
    }

    const perPage = defineResultsPerPage();

    const moviesHTML = movies.slice(0, perPage).map(generateMovieHTML).join('');
    // console.log('HTML-ul generat pentru filme:', moviesHTML);
    galleryElement.innerHTML = moviesHTML;
  } catch (error) {
    console.error('Eroare la afișarea filmelor:', error);
    document.querySelector('.movies').innerHTML =
      '<p>Error loading movies.</p>';
  }
}
