import { getGenres } from '../api/genresApi';

export function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function isInStorage(key, id) {
  const items = getFromStorage(key);
  return items.some(item => item.id === id);
}

export async function toggleStorage(key, movie) {
  let items = getFromStorage(key);

  if (isInStorage(key, movie.id)) {
    items = items.filter(item => item.id !== movie.id);
  } else {
    // Obține lista de genuri
    const genres = await getGenres();

    // Atașează genurile la film
    const movieWithGenres = {
      ...movie,
      genre_names:
        movie.genre_ids?.map(
          id => genres.find(genre => genre.id === id)?.name || 'Unknown Genre'
        ) || [],
    };

    items.push(movieWithGenres);
  }

  localStorage.setItem(key, JSON.stringify(items));
}
export function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
