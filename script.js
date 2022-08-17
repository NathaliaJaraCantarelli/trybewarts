const button = document.getElementById('submit-button');
const validEmail = 'tryber@teste.com';
const validPassword = '123456';
const inputEmail = document.getElementById('input-email-header');
const inputPassword = document.getElementById('input-password');

window.onload = function carregamento() {
  function validateLogin() {
    if (inputEmail.value === validEmail && inputPassword.value === validPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  button.addEventListener('click', validateLogin);
};

const textAreaElement = document.getElementById('textarea');
const maximumCharacters = 500;
const typedCharactersElement = document.getElementById('typed-characters');

function charactersCounter() {
  const typedCharacters = document.getElementById('textarea').value.length;
  if (typedCharacters > maximumCharacters) {
    return false;
  } typedCharactersElement.textContent = maximumCharacters - typedCharacters;
}
textAreaElement.addEventListener('keyup', charactersCounter);

const agreement = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');

function desabilita() {
  if (enviar.disabled === false) {
    enviar.disabled = true;
  } else if (enviar.disabled === true) {
    enviar.disabled = false;
  }
}

agreement.addEventListener('click', desabilita);
const textArea = document.getElementById('textarea');

function numeroCaracters() {
  const caracteres = document.getElementById('textarea').value.length;
  const contagem = document.getElementById('counter');
  contagem.innerText = 500 - caracteres;
}

textArea.addEventListener('keyup', numeroCaracters);
const nameInput = document.getElementById('input-name');
const lastnameInput = document.getElementById('input-lastname');
const emailFormInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');

function removeResto(id) {
  const elemento = document.getElementById(id);
  elemento.remove();
}

function criaParagrafo(categoria, valor) {
  const name = document.getElementById('form-data');
  const paragrafo = name.appendChild(document.createElement('p'));
  const doisPontos = ': ';
  paragrafo.innerText = categoria.concat(doisPontos, valor);
}

function conteudos(array) {
  let materias = '';
  for (let index = 0; index < array.length; index += 1) {
    const nome = array[index].value;
    const virgula = ', ';
    if (index === array.length - 1) {
      materias = materias.concat(nome);
    } else {
      materias = materias.concat(nome, virgula);
    }
  }
  return materias;
}

function nomeCompleto() {
  const espaco = ' ';
  const first = nameInput.value;
  const second = lastnameInput.value;
  const nameCompleted = first.concat(espaco, second);
  return nameCompleted;
}

function novoFormulario() {
  const familyInput = document.querySelector('input[name="family"]:checked');
  const couseInput = document.querySelectorAll('input[class="subject"]:checked');
  const rateInput = document.querySelector('input[name="rate"]:checked');
  const textAreaInput = document.getElementById('textarea');
  const newForm = document.getElementById('evaluation-form');
  criaParagrafo('Nome', nomeCompleto());
  criaParagrafo('Email', emailFormInput.value);
  criaParagrafo('Casa', houseInput.value);
  criaParagrafo('Família', familyInput.value);
  criaParagrafo('Matérias', conteudos(couseInput));
  criaParagrafo('Avaliação', rateInput.value);
  criaParagrafo('Observações', textAreaInput.value);
  newForm.style.display = 'none';
  removeResto('trybewarts-forms-logo');
  removeResto('footer');
}

enviar.addEventListener('click', novoFormulario);
