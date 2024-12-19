// Logic for the search bar (including input events)

const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');
let currentSearchQuery = ''; 

import { renderSearchedMovies } from './movieList';

async function handleSearch(event) {
  event.preventDefault();
  if (searchText.value.trim() === '') return;

  // showLoader(); 
  currentSearchQuery = searchText.value.trim();
  await renderSearchedMovies(currentSearchQuery, 1); 
  searchText.value = ''; 
}


searchButton.addEventListener('click', handleSearch);


searchText.addEventListener('keydown', async function (e) {
  if (e.key === 'Enter') {
    await handleSearch(e); 
  }
});

export { currentSearchQuery };
