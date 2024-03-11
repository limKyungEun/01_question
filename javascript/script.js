jQuery(document).ready(function(){

    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(500);//500은 0.5초에 해당
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);//500은 0.5초에 해당
    });
});