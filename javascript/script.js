jQuery(document).ready(function(){

    $('.navi>li').mouseover(function() {//.navi>li에 mouseover와 mouseout이벤트 설정
        $(this).//this는 현재 선택된 요소
        find('.submenu').// 선택된 요소의 자식 요소중 .submenu와 일치하는 요소를 찾아 반환
        stop().// 현재 동작하고 있는 애니메이션 동작을 즉시 중단
        slideDown(500);//500은 0.5초에 해당, 슬라이딩 애니매이션

    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    //gt(0)은 index값보다 더 큰값을 가진 요소를 선택함
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut().next('a').fadeIn().end.appendTo('.imgslide');},3000);
});

