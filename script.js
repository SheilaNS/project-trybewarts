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
