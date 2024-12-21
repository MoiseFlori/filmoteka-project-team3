import { generateMovieHTML } from '../components/movieList.js';
import { gallery } from '../components/refs.js';
import { searchMovies } from '../api/moviesApi';
import nothingImage from '/src/images/nothing-just.jpg';
import errorLoading from '/src/images/error-loading.gif';
import { updatePageButtons } from '../components/pagination.js';
import { getMoviesPerPage } from '../components/movieList.js';

// Renders searched movies based on the query and page
export async function renderSearchedMovies(query, page) {
  const errorElement = document.querySelector('#search-error');
  try {
    const { results, total_pages } = await searchMovies(query, page);

    if (!results || results.length === 0) {
      errorElement.style.display = 'block';
      gallery.classList.add('error-state');
      gallery.innerHTML = `<div class="error-message">
          <p>No movies found. Please try again later.</p>
          <img src="${nothingImage}" alt="Nothing" class="error-image" />
        </div>`;
      updatePageButtons(0);
      return;
    }

    const moviesPerPage = getMoviesPerPage();
    const moviesToShow = results.slice(0, moviesPerPage);
    const moviesHTML = moviesToShow.map(generateMovieHTML).join('');
    errorElement.style.display = 'none';
    gallery.innerHTML = moviesHTML;

    updatePageButtons(total_pages);
  } catch (error) {
    errorElement.style.display = 'block';
    gallery.classList.add('error-state');
    gallery.innerHTML = `
     <div class="error-message">
       <p>Error loading movies. Please try again later.</p>
       <img src="${errorLoading}" alt="Error Loading" class="error-image" />
     </div>
   `;
    updatePageButtons(0);
  }
}
