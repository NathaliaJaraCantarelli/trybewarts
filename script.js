window.onload = function () {
    let button = document.getElementById('submit-button')
    let inputEmail = document.getElementById('input-email').value;
    let inputPassword = document.getElementById ('input-password').value;
    let validEmail = 'tryber@teste.com'; 
    let validPassword = '123456';


    function validateLogin() {
        if (inputEmail == validEmail && inputPassword == validPassword) {
            alert("Olá, Tryber!");
        } else {
            alert("Email ou senha inválidos");
        }
    }

        button.addEventListener('click', validateLogin);
    }
