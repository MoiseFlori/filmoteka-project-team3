import { fetchPopularMovies, fetchMovieDetails } from '../api/moviesApi';
import { generateMovieHTML } from '../components/movieList';

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

  function renderMoviesModal(movies) {
    // movieList.innerHTML = '';
    // movies.forEach(movie => {
    //   const movieCard = document.createElement('li');
    //   movieCard.classList.add('movie_list_item');
    //   movieCard.setAttribute('data-movie-id', movie.id);
    //   movieCard.innerHTML = generateMovieHTML(movie);

    //   movieCard.addEventListener('click', () => {
    //     console.log('Clicked movie card:', movie.id);
    //     handleMovieDetails(movie.id);
    //   });

    //   movieList.appendChild(movieCard);
    // });
  }

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
    movieVotes.textContent = `${data.vote_average?.toFixed(1) || 'N/A'} / ${
      data.vote_count || 0
    }`;
    moviePopularity.textContent = data.popularity?.toFixed(1) || 'N/A';
    originalTitle.textContent = data.original_title || 'N/A';
    movieGenre.textContent =
      data.genres?.map(g => g.name).join(', ') || 'Unknown';
    movieAbout.textContent = data.overview || 'No description available.';

    trailerButton.onclick = () => fetchTrailer(data.id);
    openModal();
  }

  async function fetchTrailer(movieId) {
    try {
      const trailerUrl = await fetchTrailerUrl(movieId);
      if (trailerUrl) {
        window.open(trailerUrl, '_blank');
      } else {
        alert('Trailer not available.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  }

  function openModal() {
    modalWrapper.classList.add('open');
  }

  function closeModal() {
    modalWrapper.classList.remove('open');
  }

  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalWrapper.classList.contains('open')) {
      closeModal();
    }
  });

  const movies = await fetchPopularMovies();
  renderMoviesModal(movies);
}
