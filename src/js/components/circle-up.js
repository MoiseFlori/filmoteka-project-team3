// This function initializes the horizontal progress indicator,
// updating its width as the user scrolls.

export function initProgressIndicator() {
  window.onscroll = function () {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  };
}

// This function initializes the "Back to Top" button,
// toggling its visibility based on the scroll position
// and enabling smooth scrolling back to the top when clicked.

export function initBackToTopButton() {
  const toggleHeight = window.outerHeight * 1.2;
  const backToTopButton = document.getElementById('backToTopButton');

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > toggleHeight) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
