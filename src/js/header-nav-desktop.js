const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('[data-nav-item]');

const observerOptions = {
  threshold: 0.3,
  rootMargin: '-10% 0px -40% 0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');

      navItems.forEach(item => {
        const link = item.querySelector('a');
        if (!link) return;

        const href = link.getAttribute('href').replace('#', '');

        if (href === sectionId) {
          item.dataset.state = 'active';
        } else {
          delete item.dataset.state;
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));
