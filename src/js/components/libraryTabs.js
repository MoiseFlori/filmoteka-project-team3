// Managing tabs between "Watched" and "Queue."
import { showLoader } from  './loader.js';

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
    showLoader();
  });

  queueBtn.addEventListener('click', () => {
    queueBtn.classList.add('library-btn-active');
    watchedBtn.classList.remove('library-btn-active');
    onQueueTabClick();
    showLoader();
  });
}
