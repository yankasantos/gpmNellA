/************************ MENU LATERAL ******************************/
$(document).ready(function(){
    /*$(".button-collapse").sideNav();*/
    $('.button-collapse').sideNav({
        manuWidth:300,
        edge: 'left',
        closeOnClick: true
    });
    /*$('.button-collapse').sideNav('show');
    $('.button-collapse').sideNav('hide');*/
}) 
/***********************BOTAO DE EDICAO*******************************/
/*
$(document).redy(function)
    $("box-pencil").click(function(){

    });
*/



//
// $(document).ready(function(){
//
//     $(".icon-not").click(function(){
//         var toggle = $('.box-tudo-item').attr('data-toggle');
//         if (toggle == 'true'){
//             $(this).parent().parent().find('.box-tudo-item')
//                 .attr('data-toggle','false')
//                 .removeClass('active');
//         }
//         else{
//             $('.active')
//                 .attr('data-toggle','false')
//                 .removeClass('active');
//             $(this).parent().parent().find('.box-tudo-item')
//                 .attr('data-toggle','true').addClass('active');
//
//         }
//     });
// });