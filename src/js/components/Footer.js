const teamLink = document.getElementById("teamLink");
const modal = document.getElementById("teamModal");
const closeModal = document.getElementById("closeModal");

teamLink.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
