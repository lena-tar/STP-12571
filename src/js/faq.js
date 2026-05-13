document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('[data-faq-item]');

  items.forEach(item => {
    item.querySelector('[data-faq-btn]').addEventListener('click', () => {
      const isOpen = item.dataset.faqItem === 'active';
      items.forEach(i => (i.dataset.faqItem = 'inactive'));
      item.dataset.faqItem = isOpen ? 'inactive' : 'active';
    });
  });
});
