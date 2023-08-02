const priceCategory = document.querySelector('.price-category');
const grandBtn = document.querySelector('.grand-btn');
const masterBtn = document.querySelector('.master-btn');
const grandPrice = document.querySelector('.grand');
const masterPrice = document.querySelector('.master');


function changePrice(category) {
    if (category === "master") {
        grandPrice.classList.add('not-shown');
        masterPrice.classList.remove('not-shown');
        grandBtn.classList.remove('active-price');
        masterBtn.classList.add('active-price');
    } else if (category === "grand") {
        grandPrice.classList.remove('not-shown');
        masterPrice.classList.add('not-shown');
        grandBtn.classList.add('active-price');
        masterBtn.classList.remove('active-price');
    }
}
