// Logic for the search bar (including input events)

console.log('*** Loaded searchbar.js');

const searchText = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');  
const pagination = document.querySelector('.pagination');  

console.log(pagination);

import { renderSearchedMovies } from '../app/searchPage';

searchText.addEventListener('click', function (e) {

    e.preventDefault();
    const page = 1;
    renderSearchedMovies(searchText.value, page)
});


searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    const page = 1;
    renderSearchedMovies(searchText.value, page)
});
