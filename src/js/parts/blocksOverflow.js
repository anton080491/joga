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