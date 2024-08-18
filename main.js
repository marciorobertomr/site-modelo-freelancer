function validSend (email) {
    // Regex para tratamento do e-mail, verificando se está no padrão: teste@email.com
    const validationSendRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validationSendRegex.test(email); // Método para que testa o regex
};

document.getElementById('send').addEventListener('click', (ev) => {
    ev.preventDefault();

    let result = validSend(email.value)

    if(result) {
        document.getElementById('form').submit();
        span.textContent = '';
    } else {
        span.textContent = 'O e-mail digitado é inválido.';
    }
})

let email = document.getElementById('email');
let span = document.getElementById('validation');

email.addEventListener('focus', () => {
    span.textContent = '';
})