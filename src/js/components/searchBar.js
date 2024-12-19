// Logic for the search bar (including input events)
const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');

import { renderSearchedMovies } from './movieList';

let currentSearchQuery = '';

searchButton.addEventListener('click', async function (e) {
  e.preventDefault();
  if (searchText.value.trim() === '') return;
  currentSearchQuery = searchText.value.trim(); 
  await renderSearchedMovies(currentSearchQuery, 1);
  searchText.value = '';
});

searchText.addEventListener('keydown', async function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (searchText.value.trim() === '') return;
    currentSearchQuery = searchText.value.trim();
    await renderSearchedMovies(currentSearchQuery, 1);
    searchText.value = '';
  }
});

export { currentSearchQuery };