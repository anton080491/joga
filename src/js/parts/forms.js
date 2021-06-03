function forms() {
    // FORMS    

    let messages = { // пишем все сообщения в объект
        loading: 'Загрузка',
        seccuss: 'Спасибо!',
        failer: 'Произошла ошибка'
    };

    let form = document.querySelector('.main-form'), // находим наши формы и инпуты
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); //Создаем div для выода сообщений

    statusMessage.classList.add('status'); // присваиваем новому div класс

    form.addEventListener('submit', function (event) { //отпраавляем что то с формы
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', '/server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // Для отправки в JSON формате
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form); // оглашаем переменную и помещаем туда все данные которые чел заполнил и отправил с формы
        request.send(formData);

        // //Для отправки в JSON формате
        // let obj = {};
        // formData.forEach(function (value, key) {
        //     obj[key] = value;
        // });

        // let lson = JSON.stringify(obj);
        // request.send(lson);



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
}

module.exports = (forms);











///////////////////////////////// FORMS     with promise()

// let messages = { // пишем все сообщения в объект
//     loading: 'Загрузка',
//     seccuss: 'Спасибо!',
//     failer: 'Произошла ошибка'
// };

// let form = document.querySelector('.main-form'), // находим наши формы и инпуты
//     input = form.getElementsByTagName('input'),
//     statusMessage = document.createElement('div'); //Создаем div для выода сообщений

// statusMessage.classList.add('status'); // присваиваем новому div класс

// form.addEventListener('submit', function (event) {
// event.preventDefault();
// form.appendChild(statusMessage);
// let formData = new FormData(form); // оглашаем переменную и помещаем туда все данные которые чел заполнил и отправил с формы
// function postData() {
//     return new Promise(function (resolve, reject) {
//         let request = new XMLHttpRequest();
//         request.open('POST', '/server.php');
//         request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         request.addEventListener('readystatechange', function () { // пишем условия для вывода определенных сообщений
//             if (request.readyState < 4) {
//                 resolve();
//             } else if (request.readyState === 4 && request.status == 200) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         });
//         request.send(formData);
//     });
// }

// function clearInput() {
//     for (let i = 0; i < input.length; i++) { // обнуляем инпуты
//         input[i].value = '';
//     }
// }

// postData()
//     .then(function () {
//         statusMessage.innerHTML = messages.loading;
//     })
//     .then(function () {
//         statusMessage.innerHTML = messages.seccuss;
//     })
//     .catch(function () {
//         statusMessage.innerHTML = messages.failer;
//     })
//     .then(clearInput);
// });











////////////////////////////////////// Шаблон отправки формы

// let inputRub = document.querySelector('.rub'), // находим наши инпуты
//     inputUsd = document.querySelector('.usd');

// inputRub.addEventListener('.input', function () {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function () {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response); // помещаем наши данные которые получаем с json файла в новую переменную
//             inputUsd = inputRub.value / data.usd; //  добираемся до щначения на которое нужно делать data.usd
//         } else {
//             inputUsd.value = 'Что-то пошло не так!';
//         }
//     });

// });


