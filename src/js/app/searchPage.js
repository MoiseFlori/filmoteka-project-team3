// Gestionează funcționalitatea de căutare a filmelor și afișarea rezultatelor căutării
// nclude logica pentru manipularea inputului utilizatorului în bara de căutare, utilizând componenta searchBar.js.
// Realizează cereri către API pentru a obține rezultatele căutării pe baza cuvintelor cheie introduse de utilizator.
// Afișează rezultatele folosind componenta movieList.js și oferă paginare pentru navigarea prin rezultate.
// Gestionează erorile sau rezultatele goale pentru a îmbunătăți experiența utilizatorului.

// console.log('Inside SearchPage.js');
import { generateMovieHTML } from '../components/movieList.js';
import { fetchMovieById } from '../api/moviesApi'; // Importă funcția de API
import { searchMovies } from '../api/moviesApi'; // Importă funcția de API


function renderPageNumbers(query, currentPage, totalPages) {
  console.log(` renderPageNumbers(${query}, ${currentPage}, ${totalPages})`);
  
  const items = [];
  const pagination = document.querySelector('.pagination');  

  pagination.innerHTML = '';

  if (totalPages > 1) {
    
    const displayedPages = [];
    if (currentPage - 2 >= 1)
        displayedPages.push(currentPage - 2);

    if (currentPage - 1 >= 1)
        displayedPages.push(currentPage - 1);

    displayedPages.push(currentPage);

    if (currentPage + 1 <= totalPages)
        displayedPages.push(currentPage + 1);

    if (currentPage + 2 <= totalPages)
        displayedPages.push(currentPage + 2);

    if (displayedPages.length < 5) {

        const last = Number(displayedPages.slice(-1));

        for (let i = last + 1; i <= totalPages; i++)
         {   displayedPages.push(i);
                console.log(i);
         }
    }
        

            
        
        console.log(displayedPages);

    for (const page of displayedPages) {
      const item = document.createElement("button");
      item.type = "button";
      item.value = page;
      item.innerText = page;
      item.dataset.query = encodeURIComponent(query);
      
      item.classList.add("page-btn");  
      if (page == currentPage)  
        item.classList.add("active-page"); 

      items.push(item);
    }
    // for

    pagination.append(...items);

    pagination.addEventListener('click', submitPageNumber);

  }
  // if (totalPages > 1)

}
// function renderPageNumbers(

function scrollSmoothToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


function submitPageNumber(event) {

  // opresc submit către server
  event.preventDefault();
  
  scrollSmoothToTop();

  // extrag informațiile de la buton
  const query = event.target.dataset.query;
  const pageNumber = event.target.value;

  console.log(`Page number: ${pageNumber} ${query}`)

  // afișez filmele pentru noile cerințe
  renderSearchedMovies(query, pageNumber);

}
// function submitPageNumber(event) {



// Filme în urma Search
export async function renderSearchedMovies(query, page) {
 
    try {
    console.log('Apelare la funcția renderSearchedMovies...');
    const moviesData = await searchMovies(query, page);
    const galleryElement = document.querySelector('.movies');

    const movies = moviesData.results;
    const currentPage = moviesData.page;
    const totalPages = moviesData.total_pages;
    console.log(moviesData);

    if (!movies || movies.length === 0) {
      console.error('Niciun film pentru afișare.');
      galleryElement.innerHTML = '<p>No movies found.</p>';
      return;
    }

    const moviesHTML = movies.map(generateMovieHTML).join('');
    console.log('HTML-ul generat pentru filme:', moviesHTML);
    galleryElement.innerHTML = moviesHTML;

    // afișarea numărului de pagini
    //renderPageNumbers(query, currentPage, totalPages);

  } catch (error) {
    console.error('Eroare la afișarea filmelor:', error);
    document.querySelector('.movies').innerHTML =
      '<p>Error loading movies.</p>';
  }
}



export async function search(id) {
    try {
        // console.log(`export async function search(id)...`);
        const movie = await fetchMovieById(id);
        
        console.log(`...movie...`);
        console.dir(movie);

        const movieHtml = generateMovieHTML(movie)
        console.log(movieHtml);
        return movieHtml;

    } catch (error) {
        console.error('Eroare la afișarea filmului:', error);
    }
}
