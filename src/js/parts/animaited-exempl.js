function animated() {
    // let age = document.getElementById('age');

    // function showUser(surname, name) {
    //     alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }
    // showUser.apply(age,['irklii','Anton']);

    let content = document.querySelector('.content');

    class options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv() {
            let div = document.createElement('div');
            content.appendChild(div);
            div.classList.add('idName');

            let param =
                `height:${this.height}px; 
                width:${this.width}px; 
                background-color:${this.bg}; 
                font-size:${this.fontSize}px; 
                text-align:${this.textAlign}`;
            div.style.cssText = param;
        }
    }

    let item = new options(100, 100, 'red', 12, 'center');

    item.createDiv();



    let divs = document.querySelector('.idName');

    function animation() {
        let poss = 0;
        let x = setInterval(frame, 10);

        function frame() {
            if (poss == 400) {
                clearInterval(x);
            } else {
                poss++;
                divs.style.width = poss + 'px';
            }
        }
    }

    content.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('idName')) {
            animation();
        }
    });
}