$(document).ready(function($) {
    $('.hamburger-icon').click(function(event) {
        $('.header-right').removeClass('menu-hide').addClass('menu-show');
        $('.hamburger-icon').hide();
    });

    $('.mobile-menu-close-icon').click(function(event) {
        $('.header-right').removeClass('menu-show').addClass('menu-hide');
        $('.hamburger-icon').show();
    });

    $('.venue-container .sub-section-right').css('max-width', $('.venue-container .sub-section-right abbr').outerWidth())
});