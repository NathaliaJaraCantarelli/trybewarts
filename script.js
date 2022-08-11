window.onload = function () {
    let button = document.getElementById('submit-button');
    let inputEmail = document.getElementById('input-email').value;
    let inputPassword = document.getElementById ('input-password').value;


    function validateLogin () {
        if (inputEmail === "tryber@teste.com" && inputPassword === "123456") {
            alert('Olá, Tryber!');
        }
            alert("Email ou senha inválidos");
        }

        button.addEventListener('click', validateLogin);
    }

