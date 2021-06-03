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

