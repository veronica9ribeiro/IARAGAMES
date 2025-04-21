document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navTop = document.querySelector('.nav-top');
    if (menuToggle && navTop) {
      menuToggle.addEventListener('click', () => {
        navTop.classList.toggle('open');
      });
    }
  });