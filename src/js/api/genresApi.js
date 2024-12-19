import { BASE_URL, API_KEY } from './config.js';

let genresCache = []; 

export async function fetchGenres() {
  const apiUrl = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.genres) {
      genresCache = data.genres; 
    }

    return genresCache;
  } catch (error) {
    console.error('Eroare la încărcarea genurilor:', error);
    return [];
  }
}

export async function getGenres() {
  if (genresCache.length === 0) {
    await fetchGenres();
  }
  return genresCache;
}
