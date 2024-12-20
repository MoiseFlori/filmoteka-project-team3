// This function initializes the theme switcher functionality, 
// applying the saved theme and handling theme toggling.

export function initThemeSwitcher() {
  const themeSwitcherCheckbox = document.getElementById(
    'themeSwitcherCheckbox'
  );

  let currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
    currentTheme = 'light';
    localStorage.setItem('theme', currentTheme);
  }

  document.body.classList.add(`${currentTheme}-theme`);
  themeSwitcherCheckbox.checked = currentTheme === 'dark';

  themeSwitcherCheckbox.addEventListener('change', () => {
    const isDarkTheme = themeSwitcherCheckbox.checked;

    document.body.classList.toggle('light-theme', !isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);

    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  });
}
