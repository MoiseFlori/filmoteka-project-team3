//  Displaying movies saved in the "Watched" and "Queue" lists.
import { generateMovieHTML } from './movieList';
import { initializeModal } from './modal';
import { resetCurrentPage, updatePageButtons } from './pagination';
import { state } from './state';

let allMovies = [];

function getItemsPerPage() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 1024) {
    return 9; // Desktop
  } else if (viewportWidth >= 768) {
    return 8; // Tablet
  } else {
    return 4; // Mobile
  }
}

// Funcția de paginare locală actualizată
export function localPaginate(array, currentPage) {
  if (!array) return [];
  
  // Actualizăm itemsPerPage în funcție de dimensiunea ecranului
  state.currentItemsPerPage = getItemsPerPage();
  
  const startIndex = (currentPage - 1) * state.currentItemsPerPage;
  state.totalPages = Math.ceil(array.length / state.currentItemsPerPage);
  updatePageButtons(state.totalPages);
  return array.slice(startIndex, startIndex + state.currentItemsPerPage);
}

// Funcția principală actualizată
export default function renderLibraryList(movies) {
  // Salvăm lista completă de filme
  allMovies = movies || [];
  
  const libraryContainer = document.querySelector('.library-list');
  libraryContainer.innerHTML = '';

  if (!allMovies || allMovies.length === 0) {
    libraryContainer.innerHTML = `
      <li class="watched-img">
        <p class="watched-warning">No movies have been added yet. Let's go pick something to your liking</p>
      </li>`;
    clearPagination();
    return;
  }

  // Aplicăm paginarea folosind lista completă
  const paginatedMovies = localPaginate(allMovies, state.currentPage);
  
  let movieItems = '';
  paginatedMovies.forEach(movie => {
    movieItems += generateMovieHTML(movie);
  });

  libraryContainer.innerHTML = `
    <ul class="movies">${movieItems}</ul>
    <div class="pagination"></div>
  `;

  renderPaginationMarkup();

  // Event listener pentru filme
  libraryContainer.addEventListener('click', event => {
    const movieItem = event.target.closest('.movie_list_item');
    if (!movieItem) return;
    const movieId = movieItem.dataset.movieId;
    initializeModal(movieId);
  });
}

// Funcții pentru paginare
export function clearPagination() {
  const paginationContainer = document.querySelector('.pagination');
  if (paginationContainer) {
    paginationContainer.innerHTML = '';
  }
}

function renderPaginationMarkup() {
  if (state.totalPages <= 1) return;

  const paginationContainer = document.querySelector('.pagination');
  let markup = '';
  
  // Adăugăm butonul pentru prima pagină și dots
  markup += `
    <button class="pagination-button first-button" ${state.currentPage <= 3 ? 'hidden' : ''}>1</button>
    <span id="previous" class="dots" ${state.currentPage <= 3 ? 'hidden' : ''}>...</span>
  `;

  // Generăm butoanele pentru pagini (maxim 5 butoane)
  for (let i = 1; i <= Math.min(5, state.totalPages); i++) {
    let pageNumber = i;
    if (state.currentPage > 3) {
      pageNumber = state.currentPage - 3 + i;
      if (pageNumber + 2 > state.totalPages) {
        pageNumber = state.totalPages - 5 + i;
      }
    }

    markup += `
      <button class="pagination-button" 
              data-index="${i}"
              ${pageNumber > state.totalPages ? 'hidden' : ''}
              ${pageNumber === state.currentPage ? 'class="pagination-button pagination--current"' : ''}>
        ${pageNumber}
      </button>
    `;
  }

  // Adăugăm dots și butonul pentru ultima pagină
  markup += `
    <span id="after" class="dots" ${state.currentPage >= state.totalPages - 2 ? 'hidden' : ''}>...</span>
    <button class="pagination-button last-button" ${state.currentPage >= state.totalPages - 2 ? 'hidden' : ''}>${state.totalPages}</button>
  `;

  // Adăugăm săgețile
  markup = `
    <button class="pagination-button arrow-left" ${state.currentPage <= 1 ? 'hidden' : ''}></button>
    ${markup}
    <button class="pagination-button arrow-right" ${state.currentPage >= state.totalPages ? 'hidden' : ''}></button>
  `;
  
  paginationContainer.innerHTML = markup;
  
  // Event listener pentru butoanele de paginare
  paginationContainer.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.tagName === 'BUTTON') {
      let newPage = state.currentPage;

      if (target.classList.contains('arrow-right') && state.currentPage < state.totalPages) {
        newPage = state.currentPage + 1;
      } else if (target.classList.contains('arrow-left') && state.currentPage > 1) {
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

window.addEventListener('resize', () => {
  const oldItemsPerPage = state.currentItemsPerPage;
  const newItemsPerPage = getItemsPerPage();
  
  if (oldItemsPerPage !== newItemsPerPage && allMovies.length > 0) {
    state.currentItemsPerPage = newItemsPerPage;
    renderLibraryList(allMovies);
  }
});

export {
  renderLibraryList,
  renderPaginationMarkup
};