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