// Managing the "Add to Watch" and "Add to Queue" buttons
import { toggleStorage, isInStorage } from '../app/localStorage';

const libraryBtn = document.getElementById('library-btn');
const homeBtn = document.getElementById('home-btn');
const searchForm = document.getElementById('search-form');
const libraryButtons = document.getElementById('library-buttons');
const watchedButton = document.getElementById('watched-button');
const queueButton = document.getElementById('queue-button');

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
  };

  queueButton.onclick = () => {
    toggleStorage('queue', movie);
    queueButton.textContent = isInStorage('queue', movie.id)
      ? 'REMOVE FROM QUEUE'
      : 'ADD TO QUEUE';
  };
}
export function toggleHeaderButtons() {

  function activateHome() {
    searchForm.style.display = 'block';
    libraryButtons.style.display = 'none';

    homeBtn.classList.add('active');
    libraryBtn.classList.remove('active');
  }

  
  function activateLibrary() {
    searchForm.style.display = 'none';
    libraryButtons.style.display = 'flex';

    libraryBtn.classList.add('active');
    homeBtn.classList.remove('active');
  }


  homeBtn.addEventListener('click', activateHome);
  libraryBtn.addEventListener('click', activateLibrary);


  activateHome();
}

