$(document).ready(function () {
    "use strict";
    $('#name').click(function () {
        $('.header')[0].removeAttribute('style');
    });
    $('#resume-link').click(function () {
        $('.header')[0].style.height = '14vh';
    });
});