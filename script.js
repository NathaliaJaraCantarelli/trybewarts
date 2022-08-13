window.onload = function carregamento() {
  const button = document.getElementById('submit-button');
  const validEmail = 'tryber@teste.com';
  const validPassword = '123456';

  function validateLogin() {
    const inputEmail = document.getElementById('input-email-header').value;
    const inputPassword = document.getElementById('input-password').value;
    if (inputEmail === validEmail && inputPassword === validPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  button.addEventListener('click', validateLogin);

  const textAreaElement = document.getElementById('textarea');
  const maximumCharacters = 500;
  const typedCharactersElement = document.getElementById('typed-characters');
  
  function charactersCounter() {
    const typedCharacters = document.getElementById('textarea').value.length;

    if (typedCharacters > maximumCharacters) {
      return false;
    }
    typedCharactersElement.textContent = maximumCharacters - typedCharacters;
  }

  textAreaElement.addEventListener ('keyup', charactersCounter);
};

const agreement = document.getElementById('agreement');

function desabilita() {
  const enviar = document.getElementById('submit-btn');
  if (enviar.disabled === false) {
    enviar.disabled = true;
  } else if (enviar.disabled === true) {
    enviar.disabled = false;
  }
}

agreement.addEventListener('click', desabilita);
