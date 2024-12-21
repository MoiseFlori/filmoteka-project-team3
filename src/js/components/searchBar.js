// Logic for the search bar (including input events)
import { renderSearchedMovies } from '../app/searchPage';
import { showLoader } from './loader';

const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');
const loader = document.querySelector('.loader');

export let currentSearchQuery = '';

// Event listener for the search button
searchButton.addEventListener('click', function (e) {
  e.preventDefault();
  const page = 1;
  const query = searchText.value.trim();

  if (query === '') return;

  currentSearchQuery = query;
  showLoader();
  renderSearchedMovies(query, page).finally(() => {
    loader.classList.remove('show');
  });

  searchText.value = '';

  showLoader();
});

// Event listener for the Enter key
searchText.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const page = 1;
    const query = searchText.value.trim();

    if (query === '') return;

    currentSearchQuery = query;
    showLoader();
    renderSearchedMovies(query, page).finally(() => {
      loader.classList.remove('show');
    });

    searchText.value = '';
  }
});
