import './sass/index.scss';
import './sass/_pagination.scss';

import './js/components/searchBar';

import './js/components/loader';
import { showLoader } from './js/components/loader.js';

import { renderMovies } from './js/components/movieList.js';
import './js/components/pagination.js';
import { toggleHeaderButtons } from './js/components/buttons.js';
import {
  initProgressIndicator,
  initBackToTopButton,
} from './js/components/circle-up.js';
import { initThemeSwitcher } from './js/components/themeSwitcher.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  showLoader();
  renderMovies();
  toggleHeaderButtons();
  initProgressIndicator();
  initBackToTopButton();
});
