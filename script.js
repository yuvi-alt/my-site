// Smooth scroll with header offset
const header = document.querySelector('.nav');
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.startsWith('#') && id.length > 1) {
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (header?.offsetHeight || 0) + 20; // +20px buffer
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', id);
    }
  });
});
