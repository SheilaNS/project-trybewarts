const entrar = document.getElementById('bt-login');

function verificaLogin() {
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (email.value === '' || senha.value === '') {
    return alert('Email ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
}
entrar.addEventListener('click', verificaLogin);

const concordar = document.getElementById('agreement');
if (concordar.checked) {
  const enviar = document.getElementById('submit-btn');

  function enviaDados() {
      return
  }
  enviar.addEventListener('click', enviaDados);
}