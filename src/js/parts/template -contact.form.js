window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let messages = { // пишем все сообщения в объект
        loading: 'Загрузка',
        seccuss: 'Спасибо!',
        failer: 'Произошла ошибка'
    };

    let contactForm = document.getElementById('form'), // находим наши формы и инпуты
        input = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //Создаем div для выода сообщений

    statusMessage.classList.add('status'); // присваиваем новому div класс

    contactForm.addEventListener('submit', function (event) { //отпраавляем что то с формы
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', '/server.php');
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // Для отправки в JSON формате
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm); // оглашаем переменную и помещаем туда все данные которые чел заполнил и отправил с формы
        // request.send(formData);

        //Для отправки в JSON формате
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let lson = JSON.stringify(obj);
        request.send(lson);



        request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений
            if (request.readyState < 4) {
                statusMessage.innerHTML = messages.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = messages.seccuss;
            } else {
                statusMessage.innerHTML = messages.failer;
            }
        });

        for (let i = 0; i < input.length; i++) { // обнуляем инпуты
            input[i].value = '';
        }


    });
});