import './sass/index.scss';
import './sass/_pagination.scss';

import './js/components/searchBar';

import { showLoader } from './js/components/loader.js';

import { renderMovies } from './js/components/movieList.js';
import './js/components/pagination.js';
import { toggleHeaderButtons } from './js/components/buttons.js';

document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
  toggleHeaderButtons();
});

document.addEventListener('click', () => {
  showLoader();
});
