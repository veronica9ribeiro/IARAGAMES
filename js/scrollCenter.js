function centralizarCards() {
  const gameCards = document.querySelectorAll(".game-card");
  gameCards.forEach((gameCard) => {
    // Espera todas as imagens carregarem
    const imgs = Array.from(gameCard.querySelectorAll('img'));
    if (imgs.length === 0) {
      centralizarCard(gameCard);
      return;
    }
    let loaded = 0;
    imgs.forEach(img => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === imgs.length) centralizarCard(gameCard);
        });
        img.addEventListener('error', () => {
          loaded++;
          if (loaded === imgs.length) centralizarCard(gameCard);
        });
      }
    });
    if (loaded === imgs.length) centralizarCard(gameCard);
  });
}

function centralizarCard(gameCard) {
  if (gameCard.scrollWidth > gameCard.clientWidth) {
    gameCard.scrollLeft = (gameCard.scrollWidth - gameCard.clientWidth) / 2;
  }
}

document.addEventListener("DOMContentLoaded", centralizarCards);
document.addEventListener("headerIncluded", centralizarCards);
window.addEventListener("resize", centralizarCards);
window.addEventListener("load", centralizarCards);