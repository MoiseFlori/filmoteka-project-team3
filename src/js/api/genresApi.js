import { BASE_URL, API_KEY } from './config.js';

export async function fetchGenres() {
    const apiUrl = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  
    try {
      // console.log('Cerere la API-ul de genuri:', apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (!data.genres || data.genres.length === 0) {
        // console.error('Niciun gen găsit:', data);
        return [];
      }
  
      // console.log('Genuri obținute:', data.genres);
      return data.genres;
    } catch (error) {
      // console.error('Eroare la API-ul de genuri:', error);
      return [];
    }
  }
  
