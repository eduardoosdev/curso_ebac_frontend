const form = document.getElementById('form-compare');

function validaPrimeiroValor(primeiroNumero) {
    const primeiroComparar = primeiroNumero;
    return primeiroComparar.value;
}

function validaSegundoValor(segundoNumero) {
    const segundoComparar = segundoNumero;
    return segundoComparar.value;
}

form.addEventListener ('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const primeiroValor = document.getElementById('numero1');
    const segundoValor = document.getElementById('numero2');

    const mensagemSucesso = `O segundo numero ${segundoValor.value} é maior que o primeiro numero ${primeiroValor.value}`;

    formEValido = validaSegundoValor(segundoValor.value),validaPrimeiroValor(primeiroValor.value);

    if(formEValido) {
        alert(mensagemSucesso)

        primeiroValor.value = '';
        segundoValor.value = '';
    }else {
        alert("O primeiro valor é maior que o segundo!")
    }
})