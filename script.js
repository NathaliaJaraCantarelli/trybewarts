window.onload = function carregamento() {
  const button = document.getElementById('submit-button');
  const validEmail = 'tryber@teste.com';
  const validPassword = '123456';

  function validateLogin() {
    const inputEmail = document.getElementById('input-email').value;
    const inputPassword = document.getElementById('input-password').value;
    if (inputEmail === validEmail && inputPassword === validPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }
  button.addEventListener('click', validateLogin);
};
