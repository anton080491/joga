function Person(name, age) {
    this.name = name;
    // this.age = age;

    let personAge = age;

    this.getAge = function () {
        return personAge;
    };

    this.setAge = function (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            personAge = age;
        } else {
            console.log('введено неправильное значение!');
        }
    };

    this.say = function () {
        console.log(`Имя пользователя ${this.name}, ему ${this.age}`);
    };
}

let ivan = new Person('Ivan', 29);

ivan.say();
console.log(ivan.getAge());

ivan.setAge(21);
console.log(ivan.getAge());