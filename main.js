const form = document.getElementById('form-compare');
const valorA = document.getElementById('CampoA');

function comparaValor() {
    const valorB = document.getElementById('CampoB');

    const mensagemSucesso = `O valor B de: <b>${valorB.value}</b> é maior que o valor A de: <b>${valorA.value}</b>`;

    if(valorB.value > valorA.value) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    }else { 
        valorA.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
}

valorA.addEventListener ('keyup', function(e){
    formEValido = comparaValor(e.target.value);

    if(!comparaValor) {
        valorA.classList.add('erro');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        valorA.classList.remove('erro')
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
})

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    formEValido = comparaValor();
})