const backBtn = document.querySelector('#return-to-home');

if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.location.href = import.meta.env.BASE_URL;
  });
}
