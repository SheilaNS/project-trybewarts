// Requisito 3
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

// Requisito 18: referência sobre o atributo disabled no StackOverflow
// https://pt.stackoverflow.com/questions/153524/habilitar-e-desabilitar-um-bot%C3%A3o
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

// Requisito 20
const comentario = document.getElementById('textarea');
const contaDiv = document.getElementById('counter');
let conta = 500;
contaDiv.innerText = conta;

function contador() {
  let caracteres = 0;
  conta = 500;
  caracteres = comentario.value.split('');
  conta -= caracteres.length;
  contaDiv.innerText = conta;
}

comentario.addEventListener('keyup', contador);
