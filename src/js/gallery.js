// $(document).ready(function() {
//   // Отримати всі зображення галереї
//   var images = $('gallery-img ');

//   // Додати клас "active" до першого зображення
//   images.first().addClass('active');

//   // Клік на зображенні
//   images.click(function() {
//     // Зняти клас "active" з усіх зображень
//     images.removeClass('active');
//     // Додати клас "active" до клікнутого зображення
//     $(this).addClass('active');
//   });
// });

const images = document.querySelector('.gallery-img ');

const addActive = () => {
    // images.removeClass('active');
    this.addClass('active');
};
images.addEventListener("click", addActive);