$(document).ready(function(){
    
    reSize();
    
    //// window resize on resize
    $(window).resize(function (){
        reSize();
    });
    
    //// fadeing scroll arrow
    $(window).scroll(function () {
        var _width = $(window).width();

        if ($(this).scrollTop() > 100 && _width >770) {
            $('#topArrow').fadeIn();
        } else {
            $('#topArrow').fadeOut();
        }
    });
    
    //// Toggle menu on hover
    if($(window).width() > 1100 ){
        $('.menu_container').hover(
            function(){
              $(this).animate({
                    height: '625px'
              }, 300);

              if($(window).width() < 1400 ){$('.menu_footer').animate({ opacity: '0' },300);}
            },
            function(){
              $(this).animate({
                    height: '390px'
              }, 300);

              if($(window).width() < 1400 ){$('.menu_footer').animate({ opacity: '1' },300);}
            }
        );
    }

    $("#topArrow").hide();
    $('#title_container').css('cursor', 'pointer');
    $('#topArrow').css('cursor', 'pointer');
    
    //// top logo click
    $('#title_container').click(function() {
        document.location.href='index.html';		
    });
    
    //// menu toggle on mobile
    $('#toggle_menu').click(function() {
        $(".menu_container ul").toggle("slow");	
    });
    
    //// scrolling arrow in projects
    $('#topArrow').click(function () {
        $('body,html').animate({
                scrollTop: 0
        }, 800);
        return false;
    });

});

function reSize() {
    var width = $(window).width();
    if( width <770){
        $("#topArrow").hide();
        $("#_logo").attr('src','assets/images/title.png');
    } else {
        $("#_logo").attr('src','assets/images/title2.png');
    }
}