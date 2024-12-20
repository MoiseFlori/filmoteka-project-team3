import { generateMovieHTML } from './movieList';
import { getGenres } from '../api/genresApi'; // Importăm funcția pentru obținerea genurilor
import { initializeModal } from './modal';

export default async function renderLibraryList(movies) {
  const libraryContainer = document.querySelector('.library-list');
  libraryContainer.innerHTML = '';

  if (!movies || movies.length === 0) {
    libraryContainer.innerHTML = '<p>No movies found.</p>';
    return;
  }

  try {
    const genres = await getGenres(); // Obținem lista de genuri

    const moviesWithGenres = movies.map(movie => ({
      ...movie,
      genre_names: Array.isArray(movie.genre_ids)
        ? movie.genre_ids.map(
            id => genres.find(genre => genre.id === id)?.name || 'Unknown Genre'
          )
        : [],
    }));

    let movieItems = '';
    moviesWithGenres.forEach(movie => {
      movieItems += generateMovieHTML(movie);
    });

    libraryContainer.innerHTML = `<ul class="movies">${movieItems}</ul>`;

    libraryContainer.addEventListener('click', event => {
      const movieItem = event.target.closest('.movie_list_item');
      if (!movieItem) return;

      const movieId = movieItem.dataset.movieId;

      initializeModal(movieId);
    });
  } catch (error) {
    console.error('Error loading genres for library movies:', error);
    libraryContainer.innerHTML =
      '<p>Error loading movies. Please try again later.</p>';
  }
}
