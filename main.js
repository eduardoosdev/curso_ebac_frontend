const form = document.getElementById('form-compare');
const valorA = document.getElementById('campo-a');
const valorB = document.getElementById('campo-b');
let formEValido = false;

function comparaValor() {
    const mensagemSucesso = `O valor B de: <b>${valorB.value}</b> é maior que o valor A de: <b>${valorA.value}</b>`;

    if(valorB.value > valorA.value) {
       const containerMensagemSucesso = document.querySelector('.success-message');
       containerMensagemSucesso.innerHTML = mensagemSucesso;
       containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    }else { 
        valorA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
}

valorA.addEventListener('keypress', function(e) {
    console.log(e.target.value);
    formEValido = comparaValor(e.target.value);

    if(formEValido) {
        valorA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorA.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    formEValido = comparaValor(valorB.value, valorA.value);
})