// Logic for the search bar (including input events)


console.log('*** Loaded searchbar.js');

const searchText = document.querySelector('.search.form-input');
const searchButton = document.querySelector('.search-button');  
const pagination = document.querySelector('.pagination');  

console.log(pagination);

const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');


import { renderSearchedMovies } from './movieList';


searchText.addEventListener('click', function (e) {
    showLoader();
    e.preventDefault();
    const page = 1;
    renderSearchedMovies(searchText.value, page)
});


searchButton.addEventListener('click', function (e) {
    showLoader();

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