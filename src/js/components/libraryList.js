//  Displaying movies saved in the "Watched" and "Queue" lists.
import { generateMovieHTML } from '../components/movieList';
import { generateMovieHTML } from './movieList';
import { initializeModal } from '../components/modal';
import { generateMovieHTML } from './movieList';

export default function renderLibraryList(movies) {
  const libraryContainer = document.querySelector('.library-list');
  libraryContainer.innerHTML = ''; 

  if (!movies || movies.length === 0) {
    libraryContainer.innerHTML = '<p>No movies found.</p>';
    return;
  }


  let movieItems = '';
  movies.forEach(movie => {
    movieItems += generateMovieHTML(movie); 
  });


  libraryContainer.innerHTML = `<ul class="movies">${movieItems}</ul>`;


  libraryContainer.addEventListener('click', event => {
    const movieItem = event.target.closest('.movie_list_item');
    if (!movieItem) return;

    const movieId = movieItem.dataset.movieId;

    initializeModal(movieId);
  });
}
