import { generateMovieHTML } from './movieList';
import { initializeModal } from './modal';
import { updatePageButtons } from './pagination';
import { state } from './state';
import { getGenres } from '../api/genresApi';

async function enhanceMoviesWithGenres(movies) {
  const genresList = await getGenres(); // Preia lista de genuri

  movies.forEach(movie => {
    // Dacă `genre_ids` există, folosește-l
    if (movie.genre_ids) {
      movie.genre_names = movie.genre_ids.map(id => {
        const genre = genresList.find(g => g.id === id);
        return genre ? genre.name : null;
      }).filter(Boolean); // Elimină valorile null
    }
    // Dacă `genres` există, folosește-l
    else if (movie.genres) {
      movie.genre_names = movie.genres.map(genre => genre.name);
    }
  });

  console.log('Filme după procesarea genurilor:', movies);
}


let allMovies = [];

// Determines items per page based on screen size
function getItemsPerPage() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 1024) {
    return 9;
  } else if (viewportWidth >= 768) {
    return 8;
  } else {
    return 4;
  }
}

// Splits movies into pages
export function localPaginate(array, currentPage) {
  if (!array) return [];

  state.currentItemsPerPage = getItemsPerPage();
  const startIndex = (currentPage - 1) * state.currentItemsPerPage;
  state.totalPages = Math.ceil(array.length / state.currentItemsPerPage);
  updatePageButtons(state.totalPages);
  return array.slice(startIndex, startIndex + state.currentItemsPerPage);
}

// Displays movies and pagination
export default async function renderLibraryList(movies) {
  allMovies = movies || [];

  const libraryContainer = document.querySelector('.library-list');
  const paginationContainer = document.querySelector('.pagination');

  libraryContainer.innerHTML = '';
  paginationContainer.innerHTML = '';

  if (!allMovies.length) {
    libraryContainer.innerHTML = `
      <li class="watched-img">
        <p class="watched-warning">No movies have been added yet. Let's go pick something to your liking</p>
      </li>`;
    return;
  }
  await enhanceMoviesWithGenres(allMovies);

  const paginatedMovies = localPaginate(allMovies, state.currentPage);

  let movieItems = '';
  paginatedMovies.forEach(movie => {
    movieItems += generateMovieHTML(movie);
  });

  libraryContainer.innerHTML = movieItems;
  renderPaginationMarkup(paginationContainer);

  libraryContainer.addEventListener('click', event => {
    const movieItem = event.target.closest('.movie_list_item');
    if (!movieItem) return;
    const movieId = movieItem.dataset.movieId;
    initializeModal(movieId);
  });
}

// Creates pagination markup
function renderPaginationMarkup(container) {
  if (state.totalPages <= 1) return;

  let markup = '';

  markup += `
    <button class="pagination-button arrow-left" ${
      state.currentPage <= 1 ? 'hidden' : ''
    }></button>
    <button class="pagination-button first-button" ${
      state.currentPage <= 3 ? 'hidden' : ''
    }>1</button>
    <button class="dots-btn" ${
      state.currentPage <= 3 ? 'hidden' : ''
    }><span class="dots" id="previous">...</span></button>
  `;

  for (
    let i = Math.max(1, state.currentPage - 2);
    i <= Math.min(state.totalPages, state.currentPage + 2);
    i++
  ) {
    markup += `
      <button class="pagination-button ${
        i === state.currentPage ? 'pagination--current' : ''
      }" data-index="${i}">${i}</button>
    `;
  }

  markup += `
    <button class="dots-btn" ${
      state.currentPage >= state.totalPages - 2 ? 'hidden' : ''
    }><span class="dots" id="after">...</span></button>
    <button class="pagination-button last-button" ${
      state.currentPage >= state.totalPages - 2 ? 'hidden' : ''
    }>${state.totalPages}</button>
    <button class="pagination-button arrow-right" ${
      state.currentPage >= state.totalPages ? 'hidden' : ''
    }></button>
  `;

  container.innerHTML = markup;
  attachPaginationEvents(container);
}

// Handles pagination button clicks
function attachPaginationEvents(container) {
  container.addEventListener('click', e => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
      let newPage = state.currentPage;

      if (
        target.classList.contains('arrow-right') &&
        state.currentPage < state.totalPages
      ) {
        newPage = state.currentPage + 1;
      } else if (
        target.classList.contains('arrow-left') &&
        state.currentPage > 1
      ) {
        newPage = state.currentPage - 1;
      } else if (target.classList.contains('first-button')) {
        newPage = 1;
      } else if (target.classList.contains('last-button')) {
        newPage = state.totalPages;
      } else if (target.dataset.index) {
        newPage = Number(target.textContent);
      }

      if (newPage !== state.currentPage) {
        state.currentPage = newPage;
        renderLibraryList(allMovies);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  });
}

// Updates library on screen resize
window.addEventListener('resize', () => {
  const oldItemsPerPage = state.currentItemsPerPage;
  const newItemsPerPage = getItemsPerPage();

  if (oldItemsPerPage !== newItemsPerPage && allMovies.length > 0) {
    state.currentItemsPerPage = newItemsPerPage;
    renderLibraryList(allMovies);
  }
});
