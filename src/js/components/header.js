document.addEventListener('DOMContentLoaded', () => {
  // Select all the buttons
  const movieSearchBtn = document.getElementById('movie-search-btn');
  const homeBtn = document.getElementById('home-btn');
  const libraryBtn = document.getElementById('library-btn');

  // Add event listener for Movie Search button
  movieSearchBtn.addEventListener('click', () => {
    // Example action: alert that the Movie Search button was clicked
    alert('Movie Search button clicked!');
    // You can replace this with your actual functionality
  });

  // Add event listener for Home button
  homeBtn.addEventListener('click', () => {
    // Example action: alert that the Home button was clicked
    alert('Home button clicked!');
    // You can replace this with your actual functionality
  });

  // Add event listener for My Library button
  libraryBtn.addEventListener('click', () => {
    // Example action: alert that the My Library button was clicked
    alert('My Library button clicked!');
    // You can replace this with your actual functionality
  });

  // Highlight active button when clicked
  const navLinks = document.querySelectorAll('.header-btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.classList.remove('active')); // Remove 'active' from all buttons
      link.classList.add('active'); // Add 'active' to the clicked button
    });
  });
});
