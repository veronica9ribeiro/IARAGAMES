document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const mensagem = document.getElementById('cadastroMensagem');
  
    if (!form) return;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Limpa mensagem anterior
      mensagem.textContent = "";
      mensagem.style.color = "";
  
      // Validação de campos obrigatórios
      if (!form.nome.value.trim() || !form.idade.value.trim() || !form.email.value.trim() ||
          !form.usuario.value.trim() || !form.senha.value.trim() || !form.confirmarSenha.value.trim()) {
          mensagem.textContent = "Preencha todos os campos obrigatórios.";
          mensagem.style.color = "red";
          return;
      }
  
      // Validação de idade
      const idade = parseInt(form.idade.value, 10);
      if (isNaN(idade) || idade < 10 || idade > 120) {
          mensagem.textContent = "Idade deve ser entre 10 e 120 anos.";
          mensagem.style.color = "red";
          return;
      }
  
      // Validação de senha
      if (form.senha.value !== form.confirmarSenha.value) {
          mensagem.textContent = "As senhas não coincidem.";
          mensagem.style.color = "red";
          return;
      }
  
      // Coleta categorias
      const categorias = [];
      form.querySelectorAll('input[name="categorias"]:checked').forEach(cb => {
          categorias.push(cb.value);
      });
  
      // Coleta plataformas
      const plataformas = [];
      form.querySelectorAll('input[name="plataformas"]:checked').forEach(cb => {
          plataformas.push(cb.value);
      });
  
      // Simula cadastro (aqui você pode enviar para backend futuramente)
      mensagem.textContent = "Cadastro realizado com sucesso!";
      mensagem.style.color = "green";
      form.reset();
    });
  });