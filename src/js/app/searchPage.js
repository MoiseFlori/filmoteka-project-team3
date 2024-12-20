// Gestionează funcționalitatea de căutare a filmelor și afișarea rezultatelor căutării
// nclude logica pentru manipularea inputului utilizatorului în bara de căutare, utilizând componenta searchBar.js.
// Realizează cereri către API pentru a obține rezultatele căutării pe baza cuvintelor cheie introduse de utilizator.
// Afișează rezultatele folosind componenta movieList.js și oferă paginare pentru navigarea prin rezultate.
// Gestionează erorile sau rezultatele goale pentru a îmbunătăți experiența utilizatorului.

import { generateMovieHTML } from '../components/movieList.js';
import { getGenres } from '../api/genresApi';
import { searchMovies } from '../api/moviesApi';
import nothingImage from '/src/images/nothing-just.jpg';
import errorLoading from '/src/images/error-loading.gif';
import { updatePageButtons } from '../components/pagination.js';

// filme gasite prin search
export async function renderSearchedMovies(query, page) {
  const galleryElement = document.querySelector('.movies');
  const errorElement = document.querySelector('#search-error');

  try {
    console.log('Apelare la funcția renderSearchedMovies...');
    const moviesData = await searchMovies(query, page);

    const movies = moviesData?.results || [];

    if (!Array.isArray(movies) || movies.length === 0) {
      console.warn('No movies found.');
      errorElement.style.display = 'block';
      galleryElement.classList.add('error-state'); // Adaugă clasa pentru stilurile de eroare
      galleryElement.innerHTML = `
  <div class="error-message">
    <p>No movies found. Please try a different search term.</p>
    <img src="${nothingImage}" alt="Nothing" class="error-image" />
  </div>
`;
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
    galleryElement.classList.remove('error-state'); // Elimină clasa de eroare dacă există rezultate

    const moviesHTML = moviesWithGenres.map(generateMovieHTML).join('');
    galleryElement.innerHTML = moviesHTML;
  } catch (error) {
    console.error('Eroare la afișarea filmelor:', error);
    errorElement.style.display = 'block';
    galleryElement.classList.add('error-state'); // Adaugă clasa pentru stilurile de eroare
    galleryElement.innerHTML = `
  <div class="error-message">
    <p>Error loading movies. Please try again later.</p>
    <img src="${errorLoading}" alt="Error Loading" class="error-image" />
  </div>
`;
    updatePageButtons(0);
  }
}
