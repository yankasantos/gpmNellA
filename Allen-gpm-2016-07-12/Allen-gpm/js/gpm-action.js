
    $(document).ready(function(){
        $(".icon-not").click(function(){
            var toggle=$(".box-tudo-item").attr('data-toggle');
            if (toggle == 'true'){
                $('.box-tudo-item')
                    .attr('data-toggle','false')
                    .removeClass('icon-not');
            }
            else{
                $('.box-tudo-item')
                    .attr('data-toggle','true')
                    .addClass('icon-not');
            }
        });
    });
