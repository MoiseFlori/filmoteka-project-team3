import './sass/index.scss';



import { renderMovies } from './js/components/movieList.js';
import { initializeModal } from './js/components/modal.js';


document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized');
  renderMovies();
  initializeModal();
});
