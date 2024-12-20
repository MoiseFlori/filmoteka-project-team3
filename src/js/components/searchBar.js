// Logic for the search bar (including input events)
import { renderSearchedMovies } from '../app/searchPage';
import { showLoader } from './loader';
const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');
const loader = document.querySelector('.loader');

// Event listener pentru butonul de cautare
searchButton.addEventListener('click', function (e) {
  e.preventDefault();
  const page = 1;
  if (searchText.value.trim() === '') return;

  showLoader();
  renderSearchedMovies(searchText.value.trim(), page).finally(() => {
    loader.classList.remove('show');
  });

  searchText.value = '';
});

// Event listener pentru tasta Enter
searchText.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const page = 1;
    if (searchText.value.trim() === '') return;

    showLoader();
    renderSearchedMovies(searchText.value.trim(), page).finally(() => {
      loader.classList.remove('show');
    });

    searchText.value = '';
  }
});
