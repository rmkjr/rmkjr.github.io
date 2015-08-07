$(document).ready(function () {
    "use strict";
    $('body').fadeIn(800);
    $('#name').click(function () {
        $('#resume-content').fadeOut(300);
        $('.header')[0].removeAttribute('style');
    });
    $('#resume-link').click(function () {
        $('.header')[0].style.height = '5em';
        $('#resume-content').show();
    });
    $('#photo-link').click(function () {
        $('body').fadeOut(1000, function () {
            window.location.href = "https://www.flickr.com/photos/richardkovach";
        });
    });
});