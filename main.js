$(document).ready(function () {
    "use strict";
    $('#name').click(function () {
        $('#resume-content').fadeOut(300);
        $('.header')[0].removeAttribute('style');
    });
    $('#resume-link').click(function () {
        $('.header')[0].style.height = '5em';
        $('#resume-content').show();
    });
    $('#photo-link').click(function () {
        window.location.href = "https://500px.com/richardmkovachjr";
    });
});