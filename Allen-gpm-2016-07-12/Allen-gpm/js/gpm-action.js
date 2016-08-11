/*$(this) .find(".box-tudo-item");
 $('icon-not active') .parent() .parent() .find('box-tudo-item')
 */

/*
 ************************* Código de Caio *****************************
 $(document).ready(function () {
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

/***************NotificaçõesJquery*************************************************/
    $(document).ready(function(){

         $(".icon-not").click(function(){
            var toggle = $('.box-tudo-item').attr('data-toggle');
            if (toggle == 'true'){
                $(this).parent().parent().find('.box-tudo-item')
                    .attr('data-toggle','false')
                    .removeClass('active');
            }
            else{
                $('.active')
                    .attr('data-toggle','false')
                    .removeClass('active');
                $(this).parent().parent().find('.box-tudo-item')
                    .attr('data-toggle','true').addClass('active');

            }
        });
    });


/***************Drop-Down class jQuery*************************************************/
$(document).ready(function(){

    $(".drop-down-box").click(function(){
        var toggle = $(this).parent().find('.box-tudo-item').attr('data-toggle');
        if (toggle == 'true'){
            $(this).parent().find('.box-tudo-item')
                .attr('data-toggle','false')
                .removeClass('active');
        }
        if(toggle == 'false'){
            $('.active')
                .attr('data-toggle','false')
                .removeClass('active');

            $(this).parent().find('.box-tudo-item')
                .attr('data-toggle','true').addClass('active');
        }
    });


});

/*function teste(){
    alert("teste");
}*/


/***************************Javascript****************************************************/

