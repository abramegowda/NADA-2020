$(document).ready(function($) {
    $('.hamburger-icon').click(function(event) {
        $('.header-right').removeClass('menu-hide').addClass('menu-show');
        $('.hamburger-icon').hide();
    });

    $('.mobile-menu-close-icon').click(function(event) {
        $('.header-right').removeClass('menu-show').addClass('menu-hide');
        $('.hamburger-icon').show();
    });

    $('.venue-container .sub-section-right').css('max-width', $('.venue-container .sub-section-right abbr').outerWidth());

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

    $(".module").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("fadeInUp");
        }
    });

    $(window).scroll(function(event) {
        $(".module").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("fadeInUp");
            }
        });
    });
});