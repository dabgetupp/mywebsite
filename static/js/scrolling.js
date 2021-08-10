$(window).scroll(function(){
    $('nav').toggleClass('bg-dark', $(this).scrollTop()>=350);
    var scroll = $(window).scrollTop();

    document.getElementById("myBody").style.marginTop = (-0 -scroll) + "px";

    if(scroll >= 1000){
        $("myNav").addClass("bg-dark");
    } else {
        $("myNav").removeClass("bg-dark");
    }

});