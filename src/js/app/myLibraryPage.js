
import { getFromStorage } from '../app/localStorage';
import renderLibraryList from '../components/libraryList';
import initLibraryTabs from '../components/libraryTabs';
import { resetCurrentPage } from '../components/pagination';

export default function initMyLibraryPage() {
  const libraryButtonsContainer = document.querySelector('#library-buttons');
  libraryButtonsContainer.style.display = 'block';

  resetCurrentPage();

  renderLibraryList(getFromStorage('watched'));

  initLibraryTabs({
    onWatchedTabClick: () => {
      resetCurrentPage();
      renderLibraryList(getFromStorage('watched'));
    },
    onQueueTabClick: () => {
      resetCurrentPage();
      renderLibraryList(getFromStorage('queue'));
    },
  });
}
