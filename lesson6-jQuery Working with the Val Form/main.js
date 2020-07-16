$(document).ready(function () {

    // jquery - Работа с формой val

    /*
    event.preventDefault() - вместо event можно писать что угодно, 
    но хорошая практика писать так. Метод отменяет стандартное
    поведение браузера, и после получения данных из submit не пере-
    загружает страницу.
    */

    $('#formSum').on('submit', function (event) {
        event.preventDefault();

        var numberOne,
            numberTwo,
            summ;

        numberOne = $('#numberOne').val();
        numberTwo = $('#numberTwo').val();

        // Меняет тип на number
        numberOne = parseInt(numberOne);
        numberTwo = parseInt(numberTwo);

        // Проверяет первое поле на наличие NAN
        if ( isNaN(numberOne)) {
            numberOne = 0;
        }

        // Проверяет второе поле на наличие NAN
        if ( isNaN(numberTwo)) {
            numberTwo = 0;
        }

        summ = numberOne + numberTwo;

        $('#sumResult').text(summ);

    });

});