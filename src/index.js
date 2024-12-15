import './sass/index.scss';



import { renderMovies } from './js/components/movieList.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized');
  renderMovies();
});
