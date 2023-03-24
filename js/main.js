$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true
    })
});

$('.menu-hamburguer').click(function() {
    $('nav').slideToggle();
})


$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 0 0000-0000'
});

$('#cpf').mask('000-000-000.00', {
    placeholder: '000-000-000.00'
});

$('#cep').mask('00000-000', {
    placeholder: '00000-000'
});

$('form').validate({
    rules: {
        nome:{
            required:true
        },
        sobrenome: {
            required:true
        },
        email:{
            required:true,
            email:true
        },
        telefone:{
            required:true
        },
        cpf: {
            required:true
        },
        cep: {
            required: false
        }
    },
    messages: {
            nome: 'Por favor, insira o seu nome.',
            sobrenome: 'Por favor, insira o sobrenome.'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador){ 
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    }
});

$('.lista-veiculos button').click(function(){
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    },
    1000)
})

