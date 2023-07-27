const imagesPlus = document.querySelectorAll('.slider .slider-line li');
const sliderLine = document.querySelector('.slider .slider-line');
const elem = document.querySelector('.element');

let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * imagesPlus.length + 'px';
    imagesPlus.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= imagesPlus.length) {
        count = 0;
    }
    rollSliderNext();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = imagesPlus.length - 1;
    }
    rollSliderPev();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

function rollSliderNext() {
    const elList = document.querySelector('.element-list');
    const currentElement = document.querySelector('.current');
    const nextElement = currentElement.nextElementSibling;
    const firstElement = elList.firstElementChild;
    const lastEl = elList.lastElementChild;

  if (nextElement) {
    currentElement.classList.remove('current');
    nextElement.classList.add('current');
    } 
  else if (currentElement === lastEl) {
      currentElement.classList.remove('current');
      firstElement.classList.add('current');
    }
     sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


function rollSliderPev() {
    const elList = document.querySelector('.element-list');
    const currentElement = document.querySelector('.current');
    const prevElement = currentElement.previousElementSibling ;
    const firstElement = elList.firstElementChild;
    const lastEl = elList.lastElementChild;

  if (prevElement) {
    currentElement.classList.remove('current');
    prevElement.classList.add('current');
    } 
  else if (currentElement === firstElement) {
      currentElement.classList.remove('current');
      lastEl.classList.add('current');
    }
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

// const buttonNext = document.getElementById('changeStyleButton');
// buttonNext.addEventListener('click', changeColor);

// // Для кнопки "prev" працює
// function changeColor() {
//     const elList = document.querySelector('.element-list');
//     const currentElement = document.querySelector('.current');
//     const prevElement = currentElement.previousElementSibling ;
//     const firstElement = elList.firstElementChild;
//     const lastEl = elList.lastElementChild;
//     console.log(firstElement);

//   if (prevElement) {
//     currentElement.classList.remove('current');
//     prevElement.classList.add('current');
//     } 
//   else if (currentElement === firstElement) {
//       currentElement.classList.remove('current');
//       lastEl.classList.add('current');
//     }
// } 


// // Для кнопки "вперед" працює
// function changeColor() {
//     const elList = document.querySelector('.element-list');
//     const currentElement = document.querySelector('.current');
//     const nextElement = currentElement.nextElementSibling;
//     const firstElement = elList.firstElementChild;
//     const lastEl = elList.lastElementChild;
//     console.log(firstElement);

//   if (nextElement) {
//     currentElement.classList.remove('current');
//     nextElement.classList.add('current');
//     } 
//   else if (currentElement === lastEl) {
//       currentElement.classList.remove('current');
//       firstElement.classList.add('current');
//     }
// } 