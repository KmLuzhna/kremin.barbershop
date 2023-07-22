// // $(document).ready(function() {
// //   // Отримати всі зображення галереї
// //   var images = $('gallery-img ');

// //   // Додати клас "active" до першого зображення
// //   images.first().addClass('active');

// //   // Клік на зображенні
// //   images.click(function() {
// //     // Зняти клас "active" з усіх зображень
// //     images.removeClass('active');
// //     // Додати клас "active" до клікнутого зображення
// //     $(this).addClass('active');
// //   });
// // });

// const images = document.querySelector('.gallery-img ');

// const addActive = () => {
//     // images.removeClass('active');
//     this.addClass('active');
// };
// images.addEventListener("click", addActive);


// let offset = 0;
// const sliderLineGal = document.querySelector('.slider-line__gal');

// document.querySelector('.slider-next__gal').addEventListener('click', function(){
//     offset = offset + 256;
//     if (offset > 768) {
//         offset = 0;
//     }
//     sliderLineGal.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev__gal').addEventListener('click', function () {
//     offset = offset - 256;
//     if (offset < 0) {
//         offset = 768;
//     }
//     sliderLineGal.style.left = -offset + 'px';
// });

// const images = document.querySelectorAll('.gallery .gallery-line img');
// const sliderLineGal = document.querySelector('.gallery .gallery-line');
// let countGal = 0;
// let widthGal;

// function init() {
//     console.log('resize');
//     widthGal = document.querySelector('.gallery').offsetWidth;
//     sliderLineGal.style.width = widthGal * images.length + 'px';
//     images.forEach(item => {
//         item.style.width = widthGal + 'px';
//         item.style.height = 'auto';
//     });
//     rollSlider();
// }

// init();
// window.addEventListener('resize', init);

// document.querySelector('.gallery-next').addEventListener('click', function () {
//     countGal++;
//     if (countGal >= images.length) {
//         countGal = 0;
//     }
//     rollSlider();
// });

// document.querySelector('.gallery-prev').addEventListener('click', function () {
//     countGal--;
//     if (countGal < 0) {
//         countGal = images.length - 1;
//     }
//     rollSlider();
// });

// function rollSlider() {
//     sliderLineGal.style.transform = 'translate(-' + countGal * widthGal + 'px)';

// }