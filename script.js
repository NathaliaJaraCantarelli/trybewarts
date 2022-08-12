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
