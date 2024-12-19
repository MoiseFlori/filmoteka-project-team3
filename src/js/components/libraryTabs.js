// Managing tabs between "Watched" and "Queue."

export default function initLibraryTabs({
  onWatchedTabClick,
  onQueueTabClick,
}) {
  const watchedBtn = document.querySelector('#watched-btn');
  const queueBtn = document.querySelector('#queue-btn');

  watchedBtn.addEventListener('click', () => {
    watchedBtn.classList.add('library-btn-active');
    queueBtn.classList.remove('library-btn-active');
    onWatchedTabClick();
  });

  queueBtn.addEventListener('click', () => {
    queueBtn.classList.add('library-btn-active');
    watchedBtn.classList.remove('library-btn-active');
    onQueueTabClick();
  });
}
