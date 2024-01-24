
$(document).ready(function(){
    stickyNavbar();


    $('#toggle').click(function(){
        $('.nav-toggle').toggle()
    })
});



function stickyNavbar(){
    $(window).scroll(function(){
        console.log("hello")
        if($(this).scrollTop() > 100){
            $(".navbar").addClass("sticky-nav");
            // rotateCards(); 
        }else{
            $(".navbar").removeClass("sticky-nav");
        }
    })
}

