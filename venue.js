$(document).ready(function($) {
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