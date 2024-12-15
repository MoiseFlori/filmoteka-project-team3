import './sass/index.scss';
import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';


import { renderMovies } from './js/components/movieList.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized');
  renderMovies();
});
