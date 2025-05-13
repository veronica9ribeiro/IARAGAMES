// menu.js - Insere dinamicamente o navbar e a barra de busca responsivos em qualquer página

document.addEventListener('DOMContentLoaded', function () {
  // HTML do navbar responsivo (igual ao index_veronica.html)
  const navbarHTML = `
  <div class="container navbar-container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-0 pt-0">
      <div class="container-fluid d-flex justify-content-between align-items-start mt-0 pt-0">
        <!-- Logo -->
        <div class="navbar-brand d-flex align-items-center mt-0 pt-0">
          <a href="../index_veronica.html" style="text-decoration: none;">
            <h1 class="logo m-0">IARA GAMES</h1>
          </a>
        </div>
        <!-- Botão sanduíche padrão Bootstrap -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Menu, busca e botões -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#inicio" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Início
              </a>
              <ul class="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="../index_veronica.html">Minha Conta</a></li>
                <li><a class="dropdown-item" href="#categorias">Categorias</a></li>
              </ul>
            </li>
          </ul>
          <button class="navbar-btn" onclick="location.href='../pages/Cadastro.html'">Cadastre-se</button>
          <button class="navbar-btn" onclick="location.href='#login'">Entre</button>
        </div>
      </div>
    </nav>
  </div>`;

  // HTML da barra de busca (igual ao index_veronica.html)
  const buscaHTML = `
  <div class="container busca-intermediaria ps-3">
    <form class="search-form" role="search" style="max-width: 400px; margin-left: 0;">
      <input
        class="form-control"
        type="search"
        placeholder="Pesquise o seu jogo aqui"
        aria-label="Pesquisar"
        style="background-color: rgba(0,0,29,0.8); color: #ccc; border: none; font-family: 'Gluten', cursive;"
      />
      <button class="btn" type="submit" aria-label="Pesquisar" style="color: #00ff88;">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>`;

  // Insere o navbar e a busca ANTES do container principal, para garantir ordem correta
  const mainContainer = document.querySelector('.container.categorias-container');
  if (mainContainer) {
    mainContainer.insertAdjacentHTML('beforebegin', navbarHTML + buscaHTML);
  } else {
    // fallback: insere no topo do body
    document.body.insertAdjacentHTML('afterbegin', buscaHTML);
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }

  // --- Responsividade extra para botões em mobile (opcional, igual ao index antigo) ---
  function isMobile() {
    return window.innerWidth <= 768;
  }

  function moveButtonsToMenu() {
    const cadButton = document.querySelector('.navbar-btn[onclick*="Cadastro"]');
    const entreButton = document.querySelector('.navbar-btn[onclick*="#login"]');
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (cadButton && entreButton && navbarCollapse && !navbarCollapse.contains(cadButton)) {
      navbarCollapse.appendChild(cadButton);
      navbarCollapse.appendChild(entreButton);
    }
  }

  function moveButtonsToRight() {
    const cadButton = document.querySelector('.navbar-btn[onclick*="Cadastro"]');
    const entreButton = document.querySelector('.navbar-btn[onclick*="#login"]');
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (cadButton && entreButton && navbarCollapse && !navbarCollapse.contains(cadButton)) {
      navbarCollapse.appendChild(cadButton);
      navbarCollapse.appendChild(entreButton);
    }
  }

  // Garante que os botões fiquem sempre visíveis e funcionais
  window.addEventListener('resize', () => {
    if (isMobile()) {
      moveButtonsToMenu();
    } else {
      moveButtonsToRight();
    }
  });
  // Inicializa na primeira carga
  if (isMobile()) {
    moveButtonsToMenu();
  } else {
    moveButtonsToRight();
  }
});