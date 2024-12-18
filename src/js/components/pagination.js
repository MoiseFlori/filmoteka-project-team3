// Generating and managing pagination functionality.

import { renderMovies } from './movieList';
import { gallery } from './refs';


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

paginationRef.addEventListener('click', onPaginationClick);

let currentPage = 1;

let btns = document.querySelectorAll('.pagination-button');

prevDotsRef.hidden = true;
leftArrowRef.hidden = true;
firstPageRef.hidden = true;

function onPaginationClick(event) {
  if (event.target.tagName === 'BUTTON') {
    if (Number(event.target.textContent)) {
      currentPage = Number(event.target.textContent);
    }

    prevDotsRef.hidden = true;
    afterDotsRef.hidden = true;

    if (event.target.classList.contains('pagination-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      event.target.classList.add('pagination--current');
    }

    if (event.target.classList.contains('arrow-right') && currentPage < 20) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.classList.add('pagination--current');
      btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
      currentPage = btn1Ref.textContent;
    }

    if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
    }

    if (event.target.classList.contains('first-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = 1;
      btn2Ref.textContent = 2;
      btn3Ref.textContent = 3;
      btn4Ref.textContent = 4;
      btn5Ref.textContent = 5;
      btn1Ref.classList.add('pagination--current');
      currentPage = btn1Ref.textContent;
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (event.target.classList.contains('last-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
      btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
      btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
      btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
      btn5Ref.textContent = lastPageRef.textContent;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
      rightArrowRef.hidden = true;
      afterDotsRef.hidden = true;
      lastPageRef.hidden = true;
    }

    if (Number(currentPage) > 5) {
      leftArrowRef.hidden = false;
      prevDotsRef.hidden = false;
      firstPageRef.hidden = false;
    } else {
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (Number(currentPage) < 16) {
      rightArrowRef.hidden = false;
      afterDotsRef.hidden = false;
      lastPageRef.hidden = false;
    }

    gallery.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // if (inputRef?.value !== '') {
    //   movieSearcher(inputRef.value, currentPage);
    // } else {
    //   startPage();
    // }
    renderMovies();
  }
}

let pageSize = 9;

function defineResultsPerPage() {
  if (window.innerWidth >= 1024) {
    pageSize = 9;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    pageSize = 8;
  } else if (window.innerWidth < 768) {
    pageSize = 4;
  }
  return pageSize;
}

const secret = {
  r: 'goit',
  e: 'go it',
}

export { currentPage, defineResultsPerPage, secret };

function updatePageButtons() {
  const totalPages = 20; // Numărul total de pagini
  let startPage = currentPage - 2; // Calculează prima pagină vizibilă
  let endPage = currentPage + 2;   // Calculează ultima pagină vizibilă

  // Ajustează valorile dacă suntem aproape de început sau de sfârșit
  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(5, totalPages); // Arată primele 5 pagini
  }
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(totalPages - 4, 1); // Arată ultimele 5 pagini
  }

  // Actualizează textul butoanelor
  const pageButtons = [btn1Ref, btn2Ref, btn3Ref, btn4Ref, btn5Ref];
  pageButtons.forEach((btn, index) => {
    const pageNumber = startPage + index;
    btn.textContent = pageNumber;
    btn.classList.toggle('pagination--current', pageNumber == currentPage);
  });

  // Afișează sau ascunde punctele și săgețile
  firstPageRef.hidden = currentPage <= 3;
  leftArrowRef.hidden = currentPage <= 1;
  rightArrowRef.hidden = currentPage >= totalPages;
  lastPageRef.hidden = currentPage >= totalPages - 2;
  prevDotsRef.hidden = startPage <= 1;
  afterDotsRef.hidden = endPage >= totalPages;
}

function onPaginationClick(event) {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    // Elimină focusul de pe butonul curent
    target.blur();
    if (target.classList.contains('pagination-button') && target.dataset.index) {
      currentPage = Number(target.textContent);
    } else if (target.classList.contains('arrow-right') && currentPage < 20) {
      currentPage += 1;
    } else if (target.classList.contains('arrow-left') && currentPage > 1) {
      currentPage -= 1;
    } else if (target.classList.contains('first-button')) {
      currentPage = 1;
    } else if (target.classList.contains('last-button')) {
      currentPage = 20;
    }

    updatePageButtons();

    gallery.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderMovies();
  }
}
