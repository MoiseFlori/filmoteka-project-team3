// Logic for the search bar (including input events)

const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');

import { renderSearchedMovies } from '../app/searchPage';

// Event listener pentru butonul de cautare
searchButton.addEventListener('click', function (e) {
  e.preventDefault();
  const page = 1;
  if (searchText.value.trim() === '') return; 
  renderSearchedMovies(searchText.value.trim(), page);
  searchText.value = '';
});

// Event listener pentru tasta Enter
searchText.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const page = 1;
    if (searchText.value.trim() === '') return; 
    renderSearchedMovies(searchText.value.trim(), page);
    searchText.value = '';
  }
});
