(() => {
  const storageKey = 'theme';
  const toggle = document.querySelector('#theme-toggle');

  if (!toggle) return;

  const setTheme = (theme, persist = false) => {
    document.documentElement.dataset.theme = theme;
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', theme === 'dark' ? toggle.dataset.switchToLight : toggle.dataset.switchToDark);
    toggle.querySelector('.theme-toggle__icon').textContent = theme === 'dark' ? '☀' : '◐';
    toggle.querySelector('.theme-toggle__label').textContent = theme === 'dark' ? toggle.dataset.lightLabel : toggle.dataset.darkLabel;

    if (persist) localStorage.setItem(storageKey, theme);
  };

  setTheme(document.documentElement.dataset.theme);

  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme, true);
  });
})();
