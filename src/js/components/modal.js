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

  const API_KEY = '21161239b69d8dd6ebeec5ac6086d760';
  const API_URL = 'https://api.themoviedb.org/3/movie/popular';
  const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

  let genres = {};

  async function fetchGenres() {
    try {
      const response = await fetch(`${GENRE_URL}?api_key=${API_KEY}`);
      if (!response.ok) throw new Error('Failed to fetch genres');
      const data = await response.json();
      genres = data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      console.log('Genres fetched:', genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }

  async function fetchMovies() {
    try {
      const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
      if (!response.ok) throw new Error('Failed to fetch movies');
      const data = await response.json();
      console.log('Movies fetched:', data.results);
      renderMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  function renderMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach((movie) => {
      const movieCard = document.createElement('li');
      movieCard.classList.add('movie_list_item');
      movieCard.setAttribute('data-movie-id', movie.id);

      const genreNames = movie.genre_ids.map((id) => genres[id] || 'Unknown').join(', ');

      movieCard.innerHTML = `
        <div class="movie__cover-inner">
          <img 
            class="movie__cover" 
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" 
            alt="${movie.title} movie poster" 
          />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-date">${genreNames} | ${movie.release_date || 'Unknown'}</p>
          <div class="movie__average">${movie.vote_average.toFixed(1)}</div>
        </div>
      `;

      movieCard.addEventListener('click', () => {
        console.log('Clicked movie card:', movie.id);
        fetchMovieDetails(movie.id);
      });
      movieList.appendChild(movieCard);
    });

    console.log('Rendered movie cards:', document.querySelectorAll('.movie_list_item'));
  }

  async function fetchMovieDetails(movieId) {
    console.log('Fetching details for movie ID:', movieId);
    const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
    try {
      const response = await fetch(`${MOVIE_DETAIL_URL}?api_key=${API_KEY}`);
      if (!response.ok) throw new Error('Failed to fetch movie details');
      const data = await response.json();
      populateModal(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }

  function populateModal(data) {
    console.log('Populating modal with data:', data);
    posterSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${data.poster_path}')`;
    movieTitle.textContent = data.title;
    movieVotes.textContent = `${data.vote_average} / ${data.vote_count}`;
    moviePopularity.textContent = data.popularity.toFixed(1);
    originalTitle.textContent = data.original_title;
    movieGenre.textContent = data.genres.map((g) => g.name).join(', ');
    movieAbout.textContent = data.overview;

    trailerButton.onclick = () => fetchTrailer(data.id);
    openModal();
  }

  async function fetchTrailer(movieId) {
    console.log('Fetching trailer for movie ID:', movieId);
    const TRAILER_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    try {
      const response = await fetch(`${TRAILER_URL}?api_key=${API_KEY}`);
      if (!response.ok) throw new Error('Failed to fetch trailer');
      const data = await response.json();
      const trailer = data.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
      } else {
        alert('Trailer not available.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  }

  function openModal() {
    console.log('Opening modal...');
    modalWrapper.classList.add('open');
  }

  function closeModal() {
    console.log('Closing modal...');
    modalWrapper.classList.remove('open');
  }

  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalWrapper.classList.contains('open')) {
      closeModal();
    }
  });

  await fetchGenres();
  await fetchMovies();
}
