// Responsible for loading and displaying popular movies on the homepage.
// Makes requests to the movie API to fetch a list of popular movies.
// Coordinates rendering of the movie list using the movieList.js component.
// Handles events related to interactions on the homepage, such as loading additional movies or initializing the modal for movie details.
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


