document.addEventListener('DOMContentLoaded', function () {
  // HTML do navbar responsivo (igual ao index.html)
  const navbarHTML = `
  <div class="container navbar-container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-0 pt-0">
      <div class="container-fluid d-flex justify-content-between align-items-start mt-0 pt-0">
        <!-- Logo -->
        <div class="navbar-brand d-flex align-items-center mt-0 pt-0">
          <a href="../index.html" style="text-decoration: none;">
            <h1 class="logo m-0">IARA GAMES</h1>
            <div class="frase-aventura">Explore mundos épicos e viva aventuras inesquecíveis</div>
          </a>
        </div>
        <!-- Botão sanduíche padrão Bootstrap -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Menu, busca e botões -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#inicio" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Perfil
              </a>
              <ul class="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="../index.html">Minha Conta</a></li>
                <li><a class="dropdown-item" href="#biblioteca">Biblioteca</a></li>
                <li><a class="dropdown-item" href="#amigos">Amigos</a></li>
                   <li><a class="dropdown-item" href="#inventario">Inventário</a></li>
              </ul>
            </li>
          </ul>
          <button class="navbar-btn" onclick="location.href='../pages/Cadastro.html'">Cadastre-se</button>
          <button class="navbar-btn" onclick="location.href='../pages/Entrar.html'">
            <i class="fas fa-user me-2"></i> Entre
          </button>
          <!-- Adicione ao seu navbar -->
          <div class="dropdown d-inline-block">
            <a href="#" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="profile-circle">
                <span class="profile-head"></span>
                <span class="profile-body"></span>
              </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><a class="dropdown-item" href="../pages/Perfil.html">Meu perfil</a></li>
              <li><a class="dropdown-item" href="#">Detalhes da conta</a></li>
              <li><a class="dropdown-item" href="#">Preferências da loja</a></li>
              <li><a class="dropdown-item" href="#">Ver a minha Carteira</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Trocar conta...</a></li>
              <li><a class="dropdown-item" href="#">Finalizar sessão...</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>`;

  // HTML da barra de busca (igual ao index.html)
  const buscaHTML = `
  <div class="container busca-intermediaria ps-3">
    <form class="search-form" role="search" style="max-width: 400px; margin-left: 0;">
      <input
        class="form-control"
        type="search"
        placeholder="Pesquise o seu jogo aqui"
      />
      <button class="btn" type="submit" style="color: #00ff88;">
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