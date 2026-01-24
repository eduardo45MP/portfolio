const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');

const preferredTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)').matches
  : false;
const initialTheme = preferredTheme || (prefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', initialTheme);
if (themeToggle) {
  themeToggle.setAttribute('aria-pressed', initialTheme === 'dark');
}
if (themeLabel) {
  themeLabel.textContent =
    initialTheme === 'dark'
      ? 'Light mode / Modo claro'
      : 'Dark mode / Modo escuro';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    themeToggle.setAttribute('aria-pressed', nextTheme === 'dark');
    if (themeLabel) {
      themeLabel.textContent =
        nextTheme === 'dark'
          ? 'Light mode / Modo claro'
          : 'Dark mode / Modo escuro';
    }
  });
}
