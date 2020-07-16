$(document).ready(function () {

    // jquery - Анимация, скрытие и показ элементов

    // .animate() - Изменить CSS свойства с анимацией 
    $('#customWidth').on('click', function () {
        $('#testBox').animate({'width' : '200px'}, 1000);
    });

    $('#customOpacity').on('click', function () {
        $('#testBox').animate({'opacity' : '0'}, 1000);
    });



    // Скрытие и показ - hide show
    $('#hide').on('click', function () {
        $('#testBox').hide(1000);
    });

    $('#show').on('click', function () {
        $('#testBox').show(1000);
    });

    // delay() - Добавляет задержку между методами
    $('#hideAndShow').on('click', function () {
        $('#testBox').hide(1000).delay(1000).show(1000);
    });



    // Fade - скрытие и показ
    $('#fadeOut').on('click', function () {
        $('#testBox').fadeOut(1000);
    });

    $('#fadeIn').on('click', function () {
        $('#testBox').fadeIn(1000);
    });

    $('#fadeToggle').on('click', function () {
        $('#testBox').fadeToggle(1000);
    });



    // Slide - скрытие и показ
    $('#slideUp').on('click', function () {
        $('#testBox').slideUp(1000);
    });

    $('#slideDown').on('click', function () {
        $('#testBox').slideDown(1000);
    });

    $('#slideToggle').on('click', function () {
        $('#testBox').slideToggle(1000);
    });

});