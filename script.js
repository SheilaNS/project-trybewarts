const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const casa = document.getElementById('house');
const observacao = document.getElementById('textarea');

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
const formulario = document.getElementById('evaluation-form');

function imprimeNome() {
  const p = document.createElement('p');
  p.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  formulario.appendChild(p);
}

function imprimeEmail() {
  const p = document.createElement('p');
  p.innerText = `Email: ${emailForm.value}`;
  formulario.appendChild(p);
}

function imprimeCasa() {
  const p = document.createElement('p');
  p.innerText = `Casa: ${casa.value}`;
  formulario.appendChild(p);
}

function imprimeFamilia(param) {
  const p = document.createElement('p');
  p.innerText = `Família: ${param.value}`;
  formulario.appendChild(p);
}

function imprimeConteudo(array) {
  const subjects = [];
  for (let i = 0; i < array.length; i += 1) {
    subjects.push(array[i].value);
  }
  const p = document.createElement('p');
  p.innerText = `Matérias: ${subjects.join(', ')}`;
  formulario.appendChild(p);
}

function imprimeNota(param) {
  const p = document.createElement('p');
  p.innerText = `Avaliação: ${param.value}`;
  formulario.appendChild(p);
}

function imprimeObs() {
  const p = document.createElement('p');
  p.innerText = `Observações: ${observacao.value}`;
  formulario.appendChild(p);
}

// Requisito 18: referência sobre o atributo disabled no StackOverflow
// https://pt.stackoverflow.com/questions/153524/habilitar-e-desabilitar-um-bot%C3%A3o
// Rquisito 21: função enviaDados, ajuda do Leo Araújo e Danillo Gonçalves
function enviaDados(event) {
  event.preventDefault();
  const familia = document.querySelector('input[name=family]:checked');
  const conteudo = document.querySelectorAll('input[name=conteudo]:checked');
  const nota = document.querySelector('input[name=rate]:checked');
  formulario.innerHTML = '';
  imprimeNome();
  imprimeEmail();
  imprimeCasa();
  imprimeFamilia(familia);
  imprimeConteudo(conteudo);
  imprimeNota(nota);
  imprimeObs();
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
