const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  if (toggle) {
    const icon = toggle.querySelector('.theme-toggle__icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '◐';
  }
}

if (toggle) {
  setTheme(root.dataset.theme || 'light');
  toggle.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
