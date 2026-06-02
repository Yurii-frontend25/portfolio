// "use strict"

document.addEventListener('click', documentActions)

function documentActions(e) {
   const targetElement = e.target

   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
   }

   $(function () {
      $('.block__title').click(function (event) {
         if ($('.block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
         }
         $(this).toggleClass('active').next().slideToggle(300);
      });
   });
}
// =========================================================
window.onload = function () {
   document.addEventListener('click', documentActions);
   // Header scroll
   const headerElemet = document.querySelector('.header');
   const callback = function (entries, observe) {
      if (entries[0].isIntersecting) {
         headerElemet.classList.remove('_scroll');
      } else {
         headerElemet.classList.add('_scroll');
      }
   };
   const headerObserver = new IntersectionObserver(callback);
   headerObserver.observe(headerElemet);

   $(function () {
      $('.block__title').click(function (event) {
         if ($('.block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
         }
         $(this).toggleClass('active').next().slideToggle(300);
      });
   });
}
// =========================================================
// Animation on scroll
// Настройки
let options = {
   root: null,
   rootMargin: '5px',
   threshold: 0.3
}
// Функция обратного вызова
let callBack = function (entries, observer) {
   entries.forEach(entry => {
      // Если елемент является наблюдателем
      if (entry.isIntersecting) {
         console.log('find', entry);
         // Добавляем класс active
         entry.target.classList.add('active');
         // отпишимся от наблюдателя
         observer.unobserve(entry.target);
      }
   })
}
// Наблюдатель
let observer = new IntersectionObserver(callBack, options);
// Определяем елементы за которыми наблюдаем
let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
   observer.observe(target);
});
// =========================================================
//Spoiller
// $(function () {
//    $('.block__title').click(function (event) {
//       if ($('.block').hasClass('one')) {
//          $('.block__title').not($(this)).removeClass('active');
//          $('.block__text').not($(this).next()).slideUp(300);
//       }
//       $(this).toggleClass('active').next().slideToggle(300);
//    });
// });
// =========================================================