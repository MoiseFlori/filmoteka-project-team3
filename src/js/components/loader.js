const loader = document.querySelector(".loader");

export function showLoader() {
  console.log('calling showLoader()');
  loader.classList.add('show');
  setTimeout(() => {
    loader.classList.remove('show');
  }, 1000);
}