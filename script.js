$(document).ready(function($) {
    $('.go-top').click(function(event) {
        $('html, body').animate({
                scrollTop: $('.page-top').offset().top,
                easing: "linear"
            },
            1000,
            function() {
                var $target = $('.page-top');
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus(); 
                };
            });
    });

    $('.hamburger-icon').click(function(event) {
        $('.menu').removeClass('menu-hide').addClass('menu-show');
        $('.hamburger-icon').hide();
    });

    $('.mobile-menu-close-icon').click(function(event) {
        $('.menu').removeClass('menu-show').addClass('menu-hide');
        $('.hamburger-icon').show();
    });

    $(".carousel").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true
      });

      $('.sub-section-right a').mouseenter(function(){
        $('.sub-section-right a img').addClass('bounce');
      });

      $('.sub-section-right a').mouseleave(function(){
        $('.sub-section-right a img').removeClass('bounce');
      }) 

});