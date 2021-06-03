/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/blocksOverflow.js":
/*!****************************************!*\
  !*** ./src/js/parts/blocksOverflow.js ***!
  \****************************************/
/***/ ((module) => {

//                       Создаем всплывающий окна

function blocks() {
   let more = document.querySelector('.more'),
      popup = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      about = document.getElementById('about'),
      descriptionBtn = document.querySelectorAll('.description-btn');

   more.addEventListener('click', function () {
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden'; //не дает двигаться скроллингу при открытом этом окне
   });

   close.addEventListener('click', function () {
      popup.style.display = 'none';
      document.body.style.overflow = '';
   });

   // about.addEventListener('click', function (event) {
   //     if (event.target && event.target.classList.contains('description-btn')) {
   //         popup.style.display = 'block';
   //         document.body.style.overflow = 'hidden';
   //     }
   // });

   descriptionBtn.forEach(function (Item) {
      Item.addEventListener('click', function () {
         popup.style.display = 'block';
         document.body.style.overflow = 'hidden';
      });
   });
}

module.exports = (blocks);

/***/ }),

/***/ "./src/js/parts/calkulator.js":
/*!************************************!*\
  !*** ./src/js/parts/calkulator.js ***!
  \************************************/
/***/ ((module) => {

function calkulator(){
// Calc

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'), // выбираем определенное из списка
    totalValue = document.getElementById('total'),
    personsSum = 0, // устанавливаем начальные значения для каждого инпута
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0; // вместо того что в верстке ставим 0

persons.addEventListener('input', function () {
    personsSum = +this.value; // добавляем значение что ввел пользователь в persons
    total = (daysSum + personsSum) * 4000; // формулу как считать total дает заказчик

    if (restDays.value == '') { // пишем условие пир котором все инпуты должны быть заполнены
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = (daysSum * (personsSum * 4000));

    if (persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value; // наш total умножается на индекс выбраного значения из списка
    }
});

if (restDays.value == '' || persons.value == '') {
    totalValue.innerHTML = 0;
}
}

module.exports = (calkulator);



/***/ }),

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/***/ ((module) => {

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




/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ ((module) => {

function Slider() {
    // Slider

    let slideIndex = 1, //находим все объекты с которыми будем работать
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex); //вызываем сразу функцию showSlides()

    function showSlides(n) {

        if (n > slides.length) { //сначала полне последнего слайда и наоборот
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); //скрываем все слайды
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active')); //скрываем класс активности у точек

        slides[slideIndex - 1].style.display = 'block'; // поскольку slideIndex = 1, то если мы от него отнимем 1 то выходит что мы показываем самый первый слайд
        dots[slideIndex - 1].classList.add('dot-active'); // аналогично но с точками
    }

    function plusSlides(n) { //перекидываем слайды при клике на стрелки
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });








    dotsWrap.addEventListener('click', function (event) { // перекидываем слайды при клике на точки
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
}

module.exports = (Slider);

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

function tabs() {
    //                               Создаем табы! !!!!

    //1. находим все с чем будем работать!
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    //2. пишем функцию, которая будет скрывать все блоки с инфой и картинками
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('show');
        }
    }


    //3. вызываем функцию чтобы по умолчанию первый блок был показан
    hideTabContent(1);


    //4. пишем функцию для проявления блоков с инфой и картинками
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    //5. Пишем событие (делегирование) при котором цикл сверяет совпадение кликнутого заглавия с элементом по порядку и соответственно проявляет нужный блок с информацией и картинками
    info.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = (tabs);

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/***/ ((module) => {

function timer() {
    //                                 Создаем таймер! !!!! Timer !


    // 1. обозначаем дату дедлайна - когда наш таймер должен остановится
    let deadLine = '2022-04-30';



    // 2.пишем функцию - определяем количество милисекунд отнимая от даты детлайна настоящую дату! Все данные возвращаем в массив! При оглашении функции в аргумент endTime  вставляем наш дедлайн deadLine
    function getDataRemain(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }


    // 3. Пишем функцию таймера setClock, где вставляем id блока в котором указаны часы, минуты, секунды и второй аргумент endTime  вставляем наш дедлайн deadLine. Вконце указываем функцию интервал!!
    function setClock(id, endTime) {
        let time = document.getElementById(id),
            hours = time.querySelector('.hours'),
            minutes = time.querySelector('.minutes'),
            seconds = time.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() { //добвыляем 0 перед числом с одной цифрой
            let t = getDataRemain(endTime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            if (t.total <= 0) { // если дедлайн прошел значит у нас уже нет милисекунд - поэтому просто обнуляем таймер
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    // 4. запускаем функцию  - таймер
    setClock('timer', deadLine);
}

module.exports = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let blocks = __webpack_require__(/*! ./parts/blocksOverflow */ "./src/js/parts/blocksOverflow.js"),
        calkulator = __webpack_require__(/*! ./parts/calkulator */ "./src/js/parts/calkulator.js"),
        forms = __webpack_require__(/*! ./parts/forms */ "./src/js/parts/forms.js"),
        Slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");
    calkulator();
    blocks();
    forms();
    Slider();
    tabs();
    timer();








});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map