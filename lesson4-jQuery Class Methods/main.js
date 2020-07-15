$(document).ready(function () {

    // jquery - работа с CSS классами

    // .addClass() - Добавить класс
    $('#addGreen').on('click', function () {
        $('#testBox').addClass('greenBg');
    });

    // .removeClass() - Удалить класс
    $('#removeGreen').on('click', function () {
        $('#testBox').removeClass('greenBg');
    });

    // .toggleClass() - Вкл|Выкл класс
    $('#toggleGreen').on('click', function () {
        $('#testBox').toggleClass('greenBg');
    });

    // .css() - Добавить свой CSS - плохая практика
    $('#customCSS').on('click', function () {
        $('#testBox').css('border', '5px solid red');
    });

});