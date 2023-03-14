$(document).ready(
    function(){
        $('#botao-tarefa').click(
            function(){
                var toAdd = $('input[id=novas-tarefas]').val();
                $('ul').append('<li>' + toAdd + '</li>');
            }
        );
        $("input[name=novas-tarefas]").keyup(function(event){
            if(event.keyCode == 13){
                $("#button").click();
            }
        });
    $(document).on('click','li', function(){
        $(this).toggleClass('strike');    
    });
    $(document).on('dblclick','li', function(){
        $(this).fadeOut(5);    
    });
    $('input').focus(function() {
        $(this).val('');
    });
    }
);