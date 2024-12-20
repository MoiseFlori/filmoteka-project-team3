// Responsabil pentru încărcarea și afișarea filmelor populare pe pagina principală.
// Realizează cereri către API-ul de filme pentru a obține o listă de filme populare.
// Coordonează randarea listei de filme folosind componenta movieList.js.
// Gestionează evenimentele legate de interacțiunile pe pagina principală, precum încărcarea suplimentară a filmelor sau inițializarea modalului pentru detaliile unui film.
import { renderMovies } from './js/components/movieList.js';
import { updatePageButtons } from '../components/pagination.js';

async function initializeApp() {
  try {
    console.log('App initializing...');
    await renderMovies(1);
    updatePageButtons(20); // Set initial pagination
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

const logoContainer = document.querySelector('.logo-container');

logoContainer.addEventListener('click', () => {
  activateHome(); // Activează secțiunea Home
});
