import { showLoader } from  './loader.js';

export function initializeTrailerModal() {
  const trailerModalWrapper = document.getElementById(
    'trailer-modal-container'
  );
  const trailerBackdrop = document.getElementById('trailer-backdrop');
  const trailerContent = document.getElementById('trailer-content');

  function openTrailerModal(trailerUrl) {
    
// Adds the iframe for the trailer
    trailerContent.innerHTML = `
      <iframe 
        src="${trailerUrl}" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>`;
    trailerModalWrapper.classList.add('open');

    showLoader();
  }

  function closeTrailerModal() {
    trailerContent.innerHTML = ''; // Removes the iframe when the modal is closed
    trailerModalWrapper.classList.remove('open');
  }

  trailerBackdrop.addEventListener('click', closeTrailerModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && trailerModalWrapper.classList.contains('open')) {
      closeTrailerModal();
    }
  });

  return openTrailerModal;
}
