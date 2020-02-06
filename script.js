$(document).ready(function($) {
    $(this).scrollTop(0);
    
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

    $.fn.visible = function(partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    $(window).scroll(function(event) {
        $(".module").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("fadeInUp");
            }
        });
    });
});