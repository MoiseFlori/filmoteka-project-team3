// Implementează logica pentru pagina „My Libraries,” care permite utilizatorilor să gestioneze și să vizualizeze filmele salvate.
// Afișează două liste separate: „Watched” și „Queue,” utilizând componenta libraryList.js.
// Coordonează funcționalitatea de comutare între tab-urile „Watched” și „Queue,” folosind componenta libraryTabs.js.
// Preia filmele salvate din localStorage sau dintr-o bază de date backend, utilizând serviciul storage.js.
// Gestionează interacțiunile utilizatorilor, precum eliminarea unui film dintr-o listă sau deschiderea modalului pentru detaliile unui film.

import { getFromStorage } from '../app/localStorage';
import renderLibraryList from '../components/libraryList';
import initLibraryTabs from '../components/libraryTabs';


export default function initMyLibraryPage() {
  const libraryButtonsContainer = document.querySelector('#library-buttons');
  libraryButtonsContainer.style.display = 'block'; // Afișează butoanele din header

  // Afișează filmele din "WATCHED" implicit
  renderLibraryList(getFromStorage('watched'));

  // Initializează tab-urile folosind funcționalitatea butoanelor din header
  initLibraryTabs({
    onWatchedTabClick: () => {
      renderLibraryList(getFromStorage('watched'));
    },
    onQueueTabClick: () => {
      renderLibraryList(getFromStorage('queue'));
    },
  });
}
