// js/footer.js - Insere o footer dinâmico em todas as páginas
(function() {
  const footerHTML = `
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="mb-3">IARA GAMES</h5>
          <p>Sua plataforma de jogos brasileira com os melhores títulos nacionais.</p>
          <div class="social-icons mt-3">
            <a href="#" class="text-white me-3" aria-label="Facebook"><i class="fab fa-facebook-f fa-lg"></i></a>
            <a href="#" class="text-white me-3" aria-label="Twitter"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="#" class="text-white me-3" aria-label="Instagram"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#" class="text-white me-3" aria-label="YouTube"><i class="fab fa-youtube fa-lg"></i></a>
          </div>
        </div>
        <div class="col-md-2 mb-4 mb-md-0">
          <h5 class="mb-3">Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Início</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Jogos</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Sobre</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Contato</a></li>
          </ul>
        </div>
        <div class="col-md-3 mb-4 mb-md-0">
          <h5 class="mb-3">Legal</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Termos de Uso</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Política de Privacidade</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Cookies</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="mb-3">Suporte</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><i class="fas fa-envelope me-2"></i> contato@iaragames.com</li>
            <li class="mb-2"><i class="fas fa-phone me-2"></i> (11) 1234-5678</li>
            <li><i class="fas fa-map-marker-alt me-2"></i> São Paulo, Brasil</li>
          </ul>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center">
        <p class="mb-0">IARA GAMES &copy; 2025 - Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
