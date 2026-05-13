document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-feature-btn]');
  const cards = document.querySelectorAll('[data-feature-card]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => (b.dataset.featureBtn = 'inactive'));
      btn.dataset.featureBtn = 'active';

      const targetId = btn.dataset.target;

      cards.forEach(card => {
        card.dataset.featureCard =
          card.dataset.id === targetId ? 'active' : 'inactive';
      });
    });
  });
});
