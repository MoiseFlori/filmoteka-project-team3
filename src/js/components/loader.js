const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.add('show');
  setTimeout(() => {
    loader.classList.remove('show');
  }, 1000);
}


const searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit' , () => {
    showLoader();
});