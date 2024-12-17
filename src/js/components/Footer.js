document.addEventListener('DOMContentLoaded', () => {
  const footerLink = document.querySelector('.footer-link');
  const modal = document.querySelector('.backdrop-modal');
  const closeModalBtn = document.querySelector('.team-button-close');

  // Open modal function
  const openModal = () => {
    modal.classList.remove('modal-backdrop-hiden');
    modal.classList.add('openModalAnimationTeam');
  };

  // Close modal function
  const closeModal = () => {
    modal.classList.add('closeModalAnimationTeam');
    setTimeout(() => {
      modal.classList.remove(
        'openModalAnimationTeam',
        'closeModalAnimationTeam'
      );
      modal.classList.add('modal-backdrop-hiden');
    }, 400); // Matches animation duration
  };

  // Event listeners
  footerLink.addEventListener('click', event => {
    event.preventDefault();
    openModal();
  });

  closeModalBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside of it
  window.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close modal with ESC key
  window.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      !modal.classList.contains('modal-backdrop-hiden')
    ) {
      closeModal();
    }
  });
});
