document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navTop = document.querySelector('.nav-top');
  const navRight = document.querySelector('.nav-right');
  const cadButton = document.querySelector('.cadastre-se-button');
  const entreButton = document.querySelector('.entre-button');

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function moveButtonsToMenu() {
    if (cadButton && entreButton && navTop && !navTop.contains(cadButton)) {
      navTop.appendChild(cadButton);
      navTop.appendChild(entreButton);
    }
  }

  function moveButtonsToRight() {
    if (cadButton && entreButton && navRight && !navRight.contains(cadButton)) {
      navRight.appendChild(cadButton);
      navRight.appendChild(entreButton);
    }
  }

  if (menuToggle && navTop && navRight && cadButton && entreButton) {
    menuToggle.addEventListener('click', () => {
      navTop.classList.toggle('open');
      if (navTop.classList.contains('open') && isMobile()) {
        moveButtonsToMenu();
      } else {
        moveButtonsToRight();
      }
    });
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        moveButtonsToRight();
        navTop.classList.remove('open');
      } else if (navTop.classList.contains('open')) {
        moveButtonsToMenu();
      }
    });
    // Garante posição correta ao carregar
    if (isMobile() && navTop.classList.contains('open')) {
      moveButtonsToMenu();
    } else {
      moveButtonsToRight();
    }
  }
});