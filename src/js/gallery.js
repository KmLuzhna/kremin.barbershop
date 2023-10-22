

const images = document.querySelectorAll('.gallery-img');
const sliderLineGal = document.querySelector('.gallery .gallery-line');
// const sliderImg = document.querySelector('.gallery-img');

let countGal = 0;
let widthGal;

function init() {
    // console.log('resize');
    widthGal = document.querySelector('.gallery').offsetWidth;
    // console.log(widthGal);
    // sliderLineGal.style.width = widthGal * images.length + 'px';
    if (widthGal < 680) {
        sliderLineGal.style.width = widthGal * images.length + 'px';
        images.forEach(item => {
        item.style.width = widthGal + 'px';
        // item.style.height = 'auto';
        });
        rollSliderGal();
    } else
        if (widthGal > 679 && widthGal < 1280) {
            sliderLineGal.style.width = widthGal / 4 * images.length + 'px';
            // sliderLineGal.style.width = widthGal * Math.round(images.length) + 'px';
        images.forEach(item => {
        item.style.width = '330px';
        // item.style.height = 'auto';
        });
        rollSliderGal();
    }

    
    // rollSliderGal();
}

init();
window.addEventListener('resize', init);

countTablet = Math.round(images.length / 4);
// console.log(countTablet);

document.querySelector('.gallery-next').addEventListener('click', function () {
    countGal++;
    if (countGal >= images.length && widthGal < 680) {
        countGal = 0;
    }
    else if (countGal >= countTablet && widthGal > 679) {
        countGal = 0;
    }
    rollSliderGal();
});

document.querySelector('.gallery-prev').addEventListener('click', function () {
    countGal--;
    if (countGal < 0 && widthGal < 680) {
        countGal = images.length - 1;
    }
    else if (countGal < 0 && widthGal > 679) {
        countGal = countTablet - 1;
    }
    rollSliderGal();
});

function rollSliderGal() {
    sliderLineGal.style.transform = 'translate(-' + countGal * widthGal + 'px)';

}

