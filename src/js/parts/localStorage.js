window.addEventListener('DOMContentLoaded',function(){
    'use strict';

    let John = {
        age: 39,
        girl: true

    };


    let jsonJohn = JSON.stringify(John);
    localStorage.setItem('john',jsonJohn);
    console.log(localStorage.getItem('john'));


    // localStorage.setItem('ключ', 'значение')

    // localStorage.getItem('ключ')
    
    // localStorage.removeItem("Ключ")
    
    // localStorage.clear()


});