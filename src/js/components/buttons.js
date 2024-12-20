// Managing the "Add to Watch" and "Add to Queue" buttons
import { toggleStorage, isInStorage } from '../app/localStorage';
import initMyLibraryPage from '../app/myLibraryPage';

const libraryBtn = document.getElementById('library-btn');
const homeBtn = document.getElementById('home-btn');
const searchForm = document.getElementById('search-form');
const libraryButtons = document.getElementById('library-buttons');
const watchedButton = document.getElementById('watched-button');
const queueButton = document.getElementById('queue-button');
const mainGallery = document.querySelector('.gallery');
const libraryGallery = document.querySelector('#library-gallery');

let currentPage = 'home'; // Menține starea activă a paginii

function isOnLibraryPage() {
  return currentPage === 'library';
}
export function toggleHeaderButtons() {
  function resetActiveButtons() {
    homeBtn.classList.remove('active');
    libraryBtn.classList.remove('active');
  }

  function activateHome() {
    currentPage = 'home'; // Actualizează pagina curentă
    searchForm.style.display = 'block';
    libraryButtons.style.display = 'none';

    mainGallery.style.display = 'block';
    libraryGallery.style.display = 'none';

    resetActiveButtons(); // Resetează starea tuturor butoanelor
    homeBtn.classList.add('active'); // Evidențiază butonul Home
  }

  function activateLibrary() {
    currentPage = 'library'; // Actualizează pagina curentă
    searchForm.style.display = 'none';
    libraryButtons.style.display = 'flex';

    mainGallery.style.display = 'none';
    libraryGallery.style.display = 'block';

    resetActiveButtons(); // Resetează starea tuturor butoanelor
    libraryBtn.classList.add('active'); // Evidențiază butonul Library

    watchedButton.classList.add('library-btn-active');
    queueButton.classList.remove('library-btn-active');

    initMyLibraryPage();
  }

  homeBtn.addEventListener('click', activateHome);
  libraryBtn.addEventListener('click', activateLibrary);

  activateHome(); // Activează implicit pagina "Home"
}

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

    if (isOnLibraryPage()) {
      initMyLibraryPage();
      showUpdateMessage();
    }
  };

  queueButton.onclick = () => {
    toggleStorage('queue', movie);
    queueButton.textContent = isInStorage('queue', movie.id)
      ? 'REMOVE FROM QUEUE'
      : 'ADD TO QUEUE';

    if (isOnLibraryPage()) {
      initMyLibraryPage();
      showUpdateMessage();
    }
  };
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
