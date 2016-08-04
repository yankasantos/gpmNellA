
    $(document).ready(function(){
        $(".icon-not").click(function(){
            var toggle=$(".box-notificacoes").attr('data-toggle');
            if (toggle == 'true'){
                $('.box-notificacoes')
                    .attr('data-toggle','false')
                    .removeClass('icon-not');
            }
            else{
                $('.box-notificacoes')
                    .attr('data-toggle','true')
                    .addClass('icon-not');
            }
        });
    });
