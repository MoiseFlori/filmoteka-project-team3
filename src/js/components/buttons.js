// Managing the "Add to Watch" and "Add to Queue" buttons
import { toggleStorage, isInStorage } from '../app/localStorage';
import initMyLibraryPage from '../app/myLibraryPage';
import { showLoader } from  './loader.js';

const libraryBtn = document.getElementById('library-btn');
const homeBtn = document.getElementById('home-btn');
const searchForm = document.getElementById('search-form');
const libraryButtons = document.getElementById('library-buttons');
const watchedButton = document.getElementById('watched-button');
const queueButton = document.getElementById('queue-button');
const mainGallery = document.querySelector('.gallery');
const libraryGallery = document.querySelector('#library-gallery');

export function setupButtons(movie) {
  watchedButton.textContent = isInStorage('watched', movie.id)
    ? 'REMOVE FROM WATCHED'
    : 'ADD TO WATCHED';

  queueButton.textContent = isInStorage('queue', movie.id)
    ? 'REMOVE FROM QUEUE'
    : 'ADD TO QUEUE';

  watchedButton.onclick = () => {
    toggleStorage('watched', movie);
    watchedButton.textContent = isInStorage('watched', movie.id)
      ? 'REMOVE FROM WATCHED'
      : 'ADD TO WATCHED';

    if (document.querySelector('#library-gallery').style.display === 'block') {
      initMyLibraryPage();
      showUpdateMessage();
    }
  };

  queueButton.onclick = () => {
    toggleStorage('queue', movie);
    queueButton.textContent = isInStorage('queue', movie.id)
      ? 'REMOVE FROM QUEUE'
      : 'ADD TO QUEUE';

    if (document.querySelector('#library-gallery').style.display === 'block') {
      initMyLibraryPage();
      showUpdateMessage();
    }
  };
}

export function toggleHeaderButtons() {
  function activateHome() {
    searchForm.style.display = 'block';
    libraryButtons.style.display = 'none';

    mainGallery.style.display = 'block';
    libraryGallery.style.display = 'none';
    homeBtn.classList.add('active');
    libraryBtn.classList.remove('active');

    showLoader();
  }
  function activateLibrary() {
    searchForm.style.display = 'none';
    libraryButtons.style.display = 'flex';

    mainGallery.style.display = 'none';
    libraryGallery.style.display = 'block';

    libraryBtn.classList.add('active');
    homeBtn.classList.remove('active');

    watchedButton.classList.add('library-btn-active');
    queueButton.classList.remove('library-btn-active');

    initMyLibraryPage();

    showLoader();
  }
  function activateWatched() {
    watchedButton.classList.add('library-btn-active');
    queueButton.classList.remove('library-btn-active');

    libraryGallery.style.display = 'block';
    mainGallery.style.display = 'none';
    initMyLibraryPage();

    showLoader();
  }

  function activateQueue() {
    queueButton.classList.add('library-btn-active');
    watchedButton.classList.remove('library-btn-active');

    libraryGallery.style.display = 'block';
    mainGallery.style.display = 'none';
    initMyLibraryPage();

    showLoader();
  }

  homeBtn.addEventListener('click', activateHome);
  libraryBtn.addEventListener('click', activateLibrary);
  watchedButton.addEventListener('click', activateWatched);
  queueButton.addEventListener('click', activateQueue);

  activateHome();
}

function showUpdateMessage() {
  const message = document.createElement('p');
  message.textContent = 'Library updated!';
  message.className = 'update-message';
  document.querySelector('#library-gallery').prepend(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
}
