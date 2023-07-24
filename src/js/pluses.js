// const plesesButton = document.querySelector(".plus-btn");
const plusName = document.querySelector(".plus-info__name");
const plusInfo = document.querySelector(".plus-info__text");
const plusImage = document.querySelector(".plus-img__conteiner");
const professionalismBtn = document.querySelector(".professionalism-btn");
const professionalismBtnMob = document.querySelector(".professionalism-mob-btn");
const qualityBtn = document.querySelector(".quality-btn");
const modernityBtn = document.querySelector(".modernity-btn");
const bonusesBtn = document.querySelector(".bonuses-btn");
const mobBtnList = document.querySelector(".mob-btn-list");

let photo = document.createElement("img");
photo.src = "./quality.92b2337c.png";
photo.alt = "quality";
console.log(photo)
function changePlus(newPlus) {
    if (newPlus === "professionalism") {
        plusName.innerHTML = 'Професійність';
        plusInfo.innerHTML = 'Відповідальні майстри від 7 років досвіду, які знаються на сучасних трендах, постійно вдосконалюються та можуть довести твій образ до ідеалу';
        plusImage.innerHTML = '<img class="plus-img" src="/professionalism.6adffebe.png" alt="professionalism" />';
        professionalismBtn.classList.add('active');
        professionalismBtnMob.classList.add('active');
        qualityBtn.classList.remove('active');
        modernityBtn.classList.remove('active');
        bonusesBtn.classList.remove('active');
    } else if (newPlus === "quality") {
        plusName.innerHTML = 'Якість';
        plusInfo.innerHTML = 'Інвестували в найкраще обладнання та кращі продукти для догляду за волоссям та шкірою. Працюємо за принципом- якість в кожній деталі'; 
        // plusImage.append(photo);
        plusImage.innerHTML = '<img class="plus-img" src="/quality.92b2337c.png" alt="quality" />';
        qualityBtn.classList.add('active');
        professionalismBtn.classList.remove('active');
        professionalismBtnMob.classList.remove('active');
        modernityBtn.classList.remove('active');
        bonusesBtn.classList.remove('active');
    } else if (newPlus === "modernity") {
        plusName.innerHTML = 'Сучасність';
        plusInfo.innerHTML = 'Використовуємо тільки сучасні інструменти та чоловічу косметику, а в нашому Барбершопі крута чоловіча атмосфера з сучасним інтер’єром'; 
        plusImage.innerHTML = '<img class="plus-img" src="/modernity.44d8ca5a.png" alt="modernity" />';
        modernityBtn.classList.add('active');
        professionalismBtn.classList.remove('active');
        professionalismBtnMob.classList.remove('active');
        bonusesBtn.classList.remove('active');
        qualityBtn.classList.remove('active');
    } else if (newPlus === "bonuses") {
        plusName.innerHTML = 'Бонуси';
        plusInfo.innerHTML = 'Безкоштовні напої клієнтам, та програми лояльності'; 
        plusImage.innerHTML = '<img class="plus-img" src="/bonuses.6b6da01e.png" alt="bonuses" />';
        bonusesBtn.classList.add('active');
        professionalismBtn.classList.remove('active');
        professionalismBtnMob.classList.remove('active');
        modernityBtn.classList.remove('active');
        qualityBtn.classList.remove('active');
    }      
}
 
// const clone = mobBtnList.clone();
// clone.insertAdjacentHTML("afterend", '.plus-char');

// mobBtnList.clone().insertBefore('.plus-char');
// var clonedElement = mobBtnList.cloneNode(true);
// document.body.appendChild(clonedElement);