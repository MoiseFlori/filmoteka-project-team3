import {
  fetchPopularMovies,
  fetchMovieDetails,
  fetchTrailerUrl,
} from '../api/moviesApi';
import { generateMovieHTML } from '../components/movieList';
import { initializeTrailerModal } from '../components/trailer';
import { setupButtons } from '../components/buttons';

export async function initializeModal() {
  const movieList = document.querySelector('.movies');
  const modalWrapper = document.querySelector('.modal-wrapper');
  const backdrop = document.querySelector('.backdrop');
  const posterSection = document.getElementById('poster-section');
  const movieTitle = document.getElementById('movie-title');
  const movieVotes = document.getElementById('movie-votes');
  const moviePopularity = document.getElementById('movie-popularity');
  const originalTitle = document.getElementById('original-title');
  const movieGenre = document.getElementById('movie-genre');
  const movieAbout = document.getElementById('movie-about');
  const trailerButton = document.getElementById('trailer-button');

  const openTrailerModal = initializeTrailerModal();

  function renderMoviesModal(movies) {
    movieList.innerHTML = '';
    const moviesMarkup = movies
      .map(movie => generateMovieHTML(movie))
      .join('');
    movieList.innerHTML = moviesMarkup;
  }

  movieList.addEventListener('click', event => {
    const movieCard = event.target.closest('.movie_list_item');
    if (movieCard) {
      const movieId = movieCard.getAttribute('data-movie-id');
      handleMovieDetails(movieId);
    }
  });

  async function handleMovieDetails(movieId) {
    try {
      const movieDetails = await fetchMovieDetails(movieId);
      populateModal(movieDetails);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }

  function populateModal(data) {
    posterSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${
      data.poster_path || ''
    }')`;

    movieTitle.textContent = data.title || 'No Title';

    let ratingClass = 'movie__average--red';
    if (data.vote_average >= 7) ratingClass = 'movie__average--green';
    else if (data.vote_average >= 5) ratingClass = 'movie__average--orange';

    const modalMovieVotes = document.querySelector('#modal-movie-votes');
    if (modalMovieVotes) {
      modalMovieVotes.innerHTML = `
    <span class="vote-average ${ratingClass}">
      ${data.vote_average?.toFixed(1) || 'N/A'}
    </span>
    <span class="vote-separator">/</span>
    <span class="vote-count">
      ${data.vote_count || 0}
    </span>
  `;
    }

    moviePopularity.textContent = data.popularity?.toFixed(1) || 'N/A';
    originalTitle.textContent = data.original_title || 'N/A';
    movieGenre.textContent =
      data.genres?.map(g => g.name).join(', ') || 'Unknown';
    movieAbout.textContent = data.overview || 'No description available.';

    trailerButton.onclick = () => fetchTrailer(data.id);
    setupButtons(data);
    openModal();
  }

  async function fetchTrailer(movieId) {
    try {
      const trailerUrl = await fetchTrailerUrl(movieId);
      if (trailerUrl) {
        openTrailerModal(trailerUrl);
      } else {
        alert('Trailer not available.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  }
  function openModal() {
    document.body.classList.add('modal-open');
    modalWrapper.classList.add('open');

    backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleKeydown);
    modalWrapper.addEventListener('click', handleOutsideClick);
  }

  function closeModal() {
    document.body.classList.remove('modal-open');
    modalWrapper.classList.remove('open');

    backdrop.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleKeydown);
    modalWrapper.removeEventListener('click', handleOutsideClick);
  }

  function handleKeydown(e) {
    if (e.key === 'Escape' && modalWrapper.classList.contains('open')) {
      closeModal();
    }
  }

  function handleOutsideClick(e) {
    const modalContent = document.getElementById('movie-details');
    if (!modalContent.contains(e.target)) {
      closeModal();
    }
  }

  try {
    const movies = await fetchPopularMovies();
    const moviesArray = Array.isArray(movies) ? movies : movies.results || [];
    renderMoviesModal(moviesArray);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
}
