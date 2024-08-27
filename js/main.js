(function($){
    "use strict";
    
    $(".header-carousel").owlCarousel({
        autoplay:true,
        smartSpeed:1500,
        items:1,
        dots:true,
        loop:true,
        nav:true,
        navText:[
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
        ]
    });
    $(".testimonial-carousel").owlCarousel({
        autoplay:true,
        smartSpeed:1000,
        margin:24,
        dots:false,
        loop:true,
        nav:true,
        navText:[
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'

        ],
        Responseive:{
            0: {
                items :1
            },
            992:{
                items :2
            }
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 45){
            $('.nav-bar').addClass('sticky-top');
        }else{
            $('.nav-bar').removeClass('sticky-top');
        }
    });
})(jQuery);