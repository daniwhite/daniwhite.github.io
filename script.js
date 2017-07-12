var navTop;
$(document).ready(function() {
    navTop = $('#nav-static').position().top;
})

$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var navTop = $('#nav-static').position().top;
    console.log("Scrolltop: " + scrollTop);
    console.log("NavTop: " + navTop);
    console.log("Current NavTop: " + $('#nav-static').position().top);
    console.log("Difference: " + (navTop-scrollTop));
    if(scrollTop < navTop){
          $('#nav-fixed').css('visibility','hidden');
          $('#nav-static').css('visibility','visible');
    } else {
        $('#nav-fixed').css('visibility','visible');
        $('#nav-static').css('visibility','hidden');
    }
});
