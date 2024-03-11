//JavavScript Document


    $(".list>li").mouseover(function(){
        var submenu = $(this).children(".submenu").slideDown;});
    
    $(".list>li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();});


  
    

    var win;
    function winOpen(){
    win = window.open('contact.html', 'child', 'toolbar=no, location=no, status=no, menubar=no, resize=no, scrollbars=no, width=500, height=300')};
    