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