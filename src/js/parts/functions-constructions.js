window.addEventListener('DOMContentLoaded', function () {

   //                           ФУНКЦИИ - КОНСТРУКТОРЫ!

    // 1. пишем функцию конструктор в котором указываем данные и методы
    class User {
        constructor(name, id) {
            this.name = name;
            this.year = id;
            this.human = true;
        }
        exit() {
            console.log('пользователь ' + this.name + ' ушел');
        }
    }


    // 2. теперь если мы создаем переменную по конструктору User, то все данные и методы тоже присваиваются.
    let Ivan = new User('Иван', 29);
    Ivan.exit(); // пользователь Иван ушел









    //                ПОМИМО СОЗДАНИЯ ФУНКЦИЙ КОНСТРУКТОРОВ МЫ ТАК ЖЕ МОЖЕМ ПРИСВОИТЬ THIS ЛЮБОЙ ФУНКЦИИ ВРУЧНУЮ


    //1.создаем объект
    let user = {
        name: 'John'
    };

    // 2.создвем функцию
    function sayName(surname) {
        console.log(this);
        console.log(this.name + surname);
    }

    //3. связываем объект и функцию с помощью метода .call
    // метод call() может передавать аргументы но только строкой!!!
    console.log(sayName.call(user, " Smith"));

    //4. метод фзздн() может передавать аргументы массивом данных!!!
    console.log(sayName.apply(user, [" Smith"]));









    // Есть третий метод связать объект и функцию - с помощью .bint()


    // 1. пишем функцию с аргументом
    function count(number) {
        return this * number;
    }


    // 2. оглашаем переменную double и делаем с нее функцию через привязывание к функции count(number); через метод .bind(); в котором указываем аргумент number = 2
    let double = count.bind(2);


    // 3. когда вызываем уже функцию double(); - мы в скобках уже передаем цифру которая подставляемтся в  this  в  count(number); !!
    console.log(double(3));

   
   });