const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const languageButtons = document.querySelectorAll('[data-language]');
const scanDialog = document.querySelector('[data-scan-dialog]');

window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 12), { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.hidden = true;
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-open-scan]').forEach((button) => button.addEventListener('click', () => scanDialog?.showModal()));
document.querySelectorAll('[data-close-scan]').forEach((button) => button.addEventListener('click', () => scanDialog?.close()));

document.querySelectorAll('[data-accordion]').forEach((button) => button.addEventListener('click', () => {
  const panel = document.getElementById(button.dataset.accordion);
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  if (panel) panel.hidden = expanded;
  const symbol = button.querySelector('span');
  if (symbol) symbol.textContent = expanded ? '+' : '−';
}));

const values = {
  '100g': { kcal: '62', sugar: '4,7', fat: '3,2', salt: '0,1' },
  portion: { kcal: '68', sugar: '5,2', fat: '3,5', salt: '0,1' },
};
document.querySelectorAll('[data-serving]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-serving]').forEach((item) => item.classList.toggle('active', item === button));
  Object.entries(values[button.dataset.serving]).forEach(([key, value]) => {
    const target = document.querySelector(`[data-value="${key}"]`);
    if (target) target.textContent = value;
  });
}));

function setLanguage(next) {
  const isArabic = next === 'ar';
  document.documentElement.lang = isArabic ? 'ar' : 'fr';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.textContent = isArabic ? 'Français' : 'عربي';
    button.setAttribute('aria-label', isArabic ? 'Passer en français' : 'Passer en arabe');
  });
  document.querySelectorAll('.hero h1,.hero-lede,.intro-copy p,.scanner-copy h2,.scanner-copy>p,.product-description,.ingredient-copy h2,.ingredient-copy>p,.community-copy h2,.community-copy>p,.download-copy h2,.download-copy>p').forEach((element) => {
    element.classList.toggle('rtl-copy', isArabic);
  });
}
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ar' ? 'fr' : 'ar')));

scanDialog?.addEventListener('click', (event) => { if (event.target === scanDialog) scanDialog.close(); });
