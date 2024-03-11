jQuery(document).ready(function(){

    $('.navi>li').mouseover(function() {//.navi>li에 mouseover와 mouseout이벤트 설정
        $(this).//this는 현재 선택된 요소
        find('.submenu').// 선택된 요소의 자식 요소중 .submenu와 일치하는 요소를 찾아 반환
        stop().// 현재 동작하고 있는 애니메이션 동작을 즉시 중단
        slideDown(500);//500은 0.5초에 해당, 슬라이딩 애니매이션

    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    //gt(0)은 index값보다 더 큰값을 가진 요소를 선택함. 0번째부터 계수하여 index값보다 큰 값을 가져옴 
    //여기에서 gt(0)이므로 1,2,3이 됨
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut().//imgslide의 자식 요소<a>요소 중에서 첫번째를 선택하여 페이드 아웃 실행
        next('a').fadeIn().//다음요소를 선택하여 페이드인 실행
        end.//이전 선택 요소를 선택
        appendTo('.imgslide')//선택한 요소를 .imgslide선택자의 요소로 추가
        ;},3000);// setInterval(function(){},3000 = 일정시간마다 반복적으로 동작을 실행 3000은 3초에 해당 = 3초마다 실행
});

