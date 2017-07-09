$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var top = $('#nav').position().top;
    var offset = window.innerHeight*.2;
    if(scrollTop < offset){
          $('#nav').css('top',offset-scrollTop);
    } else {
        $('#nav').css('top','0');
    }
});
