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