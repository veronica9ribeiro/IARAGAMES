document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const mensagem = document.getElementById('cadastroMensagem');
  
    if (!form) return;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
    
      const senha = form.senha.value;
      const confirmarSenha = form.confirmarSenha.value;
      if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "red";
        return;
      }
  

      const categorias = [];
      form.querySelectorAll('input[name="categorias"]:checked').forEach(cb => {
        categorias.push(cb.value);
      });
  

      const dados = {
        nome: form.nome.value,
        email: form.email.value,
        usuario: form.usuario.value,
        senha: senha,
        idade: form.idade.value,
        plataforma: form.plataforma.value,
        categorias: categorias
      };
  
      mensagem.textContent = "Cadastro realizado com sucesso!";
      mensagem.style.color = "green";
      form.reset();

    });
  });