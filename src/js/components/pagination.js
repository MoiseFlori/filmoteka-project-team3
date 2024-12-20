import { renderMovies, renderSearchedMovies } from './movieList';
import { currentSearchQuery } from './searchBar';
import { showLoader } from  './loader.js';

const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-button');
const lastPageRef = document.querySelector('.last-button');
const paginationRef = document.querySelector('.pagination-container');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');

let currentPage = 1;
let totalPages = 20;

// Initialize pagination
paginationRef.addEventListener('click', onPaginationClick);

function updatePageButtons(total) {
  totalPages = Math.max(total || 1, 1);
  
    
  paginationRef.style.display = 'flex';  
  const pageButtons = [btn1Ref, btn2Ref, btn3Ref, btn4Ref, btn5Ref];
  pageButtons.forEach(btn => btn.hidden = true);
  
  // Arătăm maxim 5 butoane, chiar dacă avem mai multe pagini
  const visibleButtons = Math.min(totalPages, 5);
  for (let i = 0; i < visibleButtons; i++) {
    pageButtons[i].hidden = false;
    pageButtons[i].textContent = i + 1;
    pageButtons[i].classList.toggle('pagination--current', i + 1 === currentPage);
  }

  lastPageRef.textContent = totalPages;
  
  // Actualizăm vizibilitatea butoanelor de navigare
  firstPageRef.hidden = currentPage <= 3 || totalPages <= 5;
  prevDotsRef.hidden = currentPage <= 3 || totalPages <= 5;
  
  lastPageRef.hidden = currentPage >= totalPages - 2 || totalPages <= 5;
  afterDotsRef.hidden = currentPage >= totalPages - 2 || totalPages <= 5;
  
  leftArrowRef.hidden = currentPage <= 1;
  rightArrowRef.hidden = currentPage >= totalPages;

  // Ajustăm numerele butoanelor când suntem aproape de sfârșit
  if (currentPage > 3 && totalPages > 5) {
    let startPage = currentPage - 2;
    if (startPage + 4 > totalPages) {
      startPage = Math.max(1, totalPages - 4);
    }
    pageButtons.forEach((btn, index) => {
      if (!btn.hidden) {
        btn.textContent = startPage + index;
        btn.classList.toggle('pagination--current', startPage + index === currentPage);
      }
    });
  }
}

async function onPaginationClick(event) {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    target.blur();
    const prevPage = currentPage;

    if (target.classList.contains('pagination-button') && target.dataset.index) {
      currentPage = Number(target.textContent);
    } else if (target.classList.contains('arrow-right') && currentPage < totalPages) {
      currentPage += 1;
    } else if (target.classList.contains('arrow-left') && currentPage > 1) {
      currentPage -= 1;
    } else if (target.classList.contains('first-button')) {
      currentPage = 1;
    } else if (target.classList.contains('last-button')) {
      currentPage = totalPages;
    }

    if (prevPage !== currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      if (currentSearchQuery) {
        await renderSearchedMovies(currentSearchQuery, currentPage);
      } else {
        await renderMovies(currentPage);
      }
    }
  }
  
  showLoader();

}

function defineResultsPerPage() {
  let pageSize = 20;
  if (window.innerWidth >= 1024) {
    pageSize = 20;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    pageSize = 20;
  } else if (window.innerWidth < 768) {
    pageSize = 20;
  }
  return pageSize;
}

window.addEventListener('resize', defineResultsPerPage);

export { 
  currentPage, 
  defineResultsPerPage, 
  updatePageButtons 
};