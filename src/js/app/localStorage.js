export function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function isInStorage(key, id) {
  const items = getFromStorage(key);
  return items.some(item => item.id === id);
}

export function toggleStorage(key, movie) {
  let items = getFromStorage(key);

  if (isInStorage(key, movie.id)) {
    items = items.filter(item => item.id !== movie.id);
  } else {
    items.push(movie);
  }

  localStorage.setItem(key, JSON.stringify(items));
}

export function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
