import { generateMovieHTML } from '../components/movieList.js';
import { getGenres } from '../api/genresApi';
import { searchMovies } from '../api/moviesApi';
import nothingImage from '/src/images/nothing-just.jpg';
import errorLoading from '/src/images/error-loading.gif';
import { updatePageButtons } from '../components/pagination.js';

// Render movies found via search
export async function renderSearchedMovies(query, page) {
  const galleryElement = document.querySelector('.movies');
  const errorElement = document.querySelector('#search-error');

  try {
    const moviesData = await searchMovies(query, page);
    const movies = moviesData?.results || [];

    if (!Array.isArray(movies) || movies.length === 0) {
      errorElement.style.display = 'block';
      galleryElement.classList.add('error-state');
      galleryElement.innerHTML = `
        <div class="error-message">
          <p>No movies found. Please try a different search term.</p>
          <img src="${nothingImage}" alt="Nothing" class="error-image" />
        </div>`;
      updatePageButtons(0);
      return;
    }

    const genres = await getGenres();
    const moviesWithGenres = movies.map(movie => ({
      ...movie,
      genre_names: Array.isArray(movie.genre_ids)
        ? movie.genre_ids.map(
            id => genres.find(genre => genre.id === id)?.name || 'Unknown Genre'
          )
        : [],
    }));

    errorElement.style.display = 'none';
    galleryElement.classList.remove('error-state');
    galleryElement.innerHTML = moviesWithGenres.map(generateMovieHTML).join('');
  } catch (error) {
    errorElement.style.display = 'block';
    galleryElement.classList.add('error-state');
    galleryElement.innerHTML = `
      <div class="error-message">
        <p>Error loading movies. Please try again later.</p>
        <img src="${errorLoading}" alt="Error Loading" class="error-image" />
      </div>`;
    updatePageButtons(0);
  }
}
