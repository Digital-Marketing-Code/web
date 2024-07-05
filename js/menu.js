$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });

    $('.menu-toggle').click(function() {
        $('.menu').toggleClass('open');
    });
});