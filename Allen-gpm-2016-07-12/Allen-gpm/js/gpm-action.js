/***************Notificações*************************************************/
    $(document).ready(function(){

         $(".icon-not").click(function(){
            var toggle = $('.box-tudo-item').attr('data-toggle');
            if (toggle == 'true'){
                $(this).parent().parent().find('.box-tudo-item')
                    .attr('data-toggle','false')
                    .removeClass('active');
            }
            else{
                $(this).parent().parent().find('.box-tudo-item')
                    .attr('data-toggle','true').addClass('active');
            }
        });
    });

    /*$(this) .find(".box-tudo-item");
      $('icon-not active') .parent() .parent() .find('box-tudo-item')
    */

   /* $(document).ready(function () {
        $(".container > button").click(function () {
            var toggle = $('.list-wrapper').attr('data-toggle');
            if(toggle == 'true'){
                $('.list-wrapper')
                    .attr('data-toggle', 'false')
                    .removeClass('active');

            }
            else{
                $('.list-wrapper')
                    .attr('data-toggle', 'true')
                    .addClass('active');
            }
        });
    });
    *********************** Código de Caio *****************************
    */
/***************Notificações*************************************************/
$(document).ready(function(){

    $("drop-down-box").click(function(){
        var toggle = $('.box-tudo-item').attr('data-toggle');
        if (toggle == 'true'){
            $(this).parent().parent().find('.box-tudo-item')
                .attr('data-toggle','false')
                .removeClass('active');
        }
        else{
            $(this).parent().parent().find('.box-tudo-item')
                .attr('data-toggle','true').addClass('active');
        }
    });
});