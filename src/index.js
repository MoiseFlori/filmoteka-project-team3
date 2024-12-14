import './sass/index.scss';

import { renderMovies } from './js/components/movieList';
import { fetchPopularMovies } from './js/api/moviesApi';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicatia a fost initializata');
  renderMovies();
});
