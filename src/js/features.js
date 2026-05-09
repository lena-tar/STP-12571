document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.feature-btn');
  const cards = document.querySelectorAll('.feature-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.dataset.target;

      cards.forEach(card => {
        card.classList.toggle('active', card.id === targetId);
      });
    });
  });
});
