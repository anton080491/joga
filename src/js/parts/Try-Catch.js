window.addEventListener('DOMContantLoaded', function(){
    'use strict';

let json = {'id':2}; // объявляем объект

try{  // записываем действия с ним в Try
    let user = JSON.parse(json);
    console.log(user);

    if(!user.name){ //создаем свои ошибки
        throw new Error ('В этих данных нет имени');
    }
}
catch{ // в случае ошибки выводится ошибка
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log('мы получили ошибку: `${error.name}');
} finally { // то что выведится всегда
    console.log('а я выполнюсь всегда');
}

console.log('я буду продолжать работать'); // скрипт все равно продолжает работу








});