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

function enviaDados(event) {
  event.preventDefault();
}

const concordar = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');
enviar.disabled = true;

function mudaBotao() {
  if (concordar.checked) {
    enviar.disabled = false;
    enviar.addEventListener('click', enviaDados);
  } else {
    enviar.disabled = true;
  }
}

concordar.addEventListener('click', mudaBotao);
