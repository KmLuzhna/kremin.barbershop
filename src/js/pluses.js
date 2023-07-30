// const plesesButton = document.querySelector(".plus-btn");
const plusName = document.querySelector(".plus-info__name");
const plusNameMob = document.querySelector(".plus-mob__name");
const plusInfo = document.querySelector(".plus-info__text");
const plusImage = document.querySelector(".plus-img__conteiner");
const professionalismBtn = document.querySelector(".professionalism-btn");

const professionalismBtnMob = document.querySelector(".professionalism-mob-btn");
const qualityBtn = document.querySelector(".quality-btn");
const modernityBtn = document.querySelector(".modernity-btn");
const bonusesBtn = document.querySelector(".bonuses-btn");
const mobBtnList = document.querySelector(".mob-btn-list");

const professionalismBtnMobBottom = document.querySelector(".professionalism-mob-btn--bottom");
const qualityBtnBottom  = document.querySelector(".quality-btn--bottom");
const modernityBtnBottom  = document.querySelector(".modernity-btn--bottom");
const bonusesBtnBottom  = document.querySelector(".bonuses-btn--bottom");
const mobBtnListBottom  = document.querySelector(".mob-btn-list--bottom");

const professionalismImg = document.querySelector(".professionalism-img");
const qualityImg = document.querySelector(".quality-img");
const modernityImg = document.querySelector(".modernity-img");
const bonusesImg = document.querySelector(".bonuses-img");


let photo = document.createElement("img");
photo.src = "./quality.92b2337c.png";
photo.alt = "quality";
console.log(photo)
function changePlus(newPlus) {
    if (newPlus === "professionalism") {
        activeProfessionalis();
    } else if (newPlus === "quality") {
        activeQuality();
    } else if (newPlus === "modernity") {
        activeModernity();
    } else if (newPlus === "bonuses") {
        activeBonuses();
    }      
}
 

function activeProfessionalis() {
    plusName.innerHTML = 'Професійність';
    plusNameMob.innerHTML = 'Професійність';
        plusInfo.innerHTML = 'Відповідальні майстри від 7 років досвіду, які знаються на сучасних трендах, постійно вдосконалюються та можуть довести твій образ до ідеалу';

    professionalismImg.classList.remove('not-active');
    qualityImg.classList.add('not-active');
    modernityImg.classList.add('not-active');
    bonusesImg.classList.add('not-active');

    professionalismBtn.classList.add('active');
    professionalismBtnMob.classList.add('active');
    qualityBtn.classList.remove('active');
    modernityBtn.classList.remove('active');
    bonusesBtn.classList.remove('active');
    
        professionalismBtnMobBottom.classList.add('active');
        qualityBtnBottom.classList.remove('active');
        modernityBtnBottom.classList.remove('active');
        bonusesBtnBottom.classList.remove('active');
        
        
}

function activeQuality() {
    plusName.innerHTML = 'Якість';
    plusNameMob.innerHTML = 'Якість';
    plusInfo.innerHTML = 'Інвестували в найкраще обладнання та кращі продукти для догляду за волоссям та шкірою. Працюємо за принципом- якість в кожній деталі';
    
    qualityImg.classList.remove('not-active');
    professionalismImg.classList.add('not-active');
    modernityImg.classList.add('not-active');
    bonusesImg.classList.add('not-active');
    
        qualityBtn.classList.add('active');
        professionalismBtn.classList.remove('active');
        professionalismBtnMob.classList.remove('active');
        modernityBtn.classList.remove('active');
        bonusesBtn.classList.remove('active');
    
        qualityBtnBottom.classList.add('active');
        professionalismBtnMobBottom.classList.remove('active');
        modernityBtnBottom.classList.remove('active');
        bonusesBtnBottom.classList.remove('active');
        
}

function activeModernity() {  
    plusName.innerHTML = 'Сучасність';
    plusNameMob.innerHTML = 'Сучасність';
    plusInfo.innerHTML = 'Використовуємо тільки сучасні інструменти та чоловічу косметику, а в нашому Барбершопі крута чоловіча атмосфера з сучасним інтер’єром'; 
        
    modernityImg.classList.remove('not-active');
    professionalismImg.classList.add('not-active');
    qualityImg.classList.add('not-active');
    bonusesImg.classList.add('not-active');  

    modernityBtn.classList.add('active');
    professionalismBtn.classList.remove('active');
    professionalismBtnMob.classList.remove('active');
    bonusesBtn.classList.remove('active');
    qualityBtn.classList.remove('active');

    modernityBtnBottom.classList.add('active');
    professionalismBtnMobBottom.classList.remove('active');
    bonusesBtnBottom.classList.remove('active');
    qualityBtnBottom.classList.remove('active');
        
}

function activeBonuses() {
    plusName.innerHTML = 'Бонуси';
    plusNameMob.innerHTML = 'Бонуси';
    plusInfo.innerHTML = 'Безкоштовні напої клієнтам, та програми лояльності'; 
     
    bonusesImg.classList.remove('not-active');
    professionalismImg.classList.add('not-active');
    modernityImg.classList.add('not-active');
    qualityImg.classList.add('not-active');
    
    bonusesBtn.classList.add('active');
    professionalismBtn.classList.remove('active');
    professionalismBtnMob.classList.remove('active');
    modernityBtn.classList.remove('active');
    qualityBtn.classList.remove('active');
    
    bonusesBtnBottom.classList.add('active');
    professionalismBtnMobBottom.classList.remove('active');
    modernityBtnBottom.classList.remove('active');
    qualityBtnBottom.classList.remove('active');
}

// WORK
// function changePlus(newPlus) {
//     if (newPlus === "professionalism") {
//         plusName.innerHTML = 'Професійність';
//         plusInfo.innerHTML = 'Відповідальні майстри від 7 років досвіду, які знаються на сучасних трендах, постійно вдосконалюються та можуть довести твій образ до ідеалу';
//         plusImage.innerHTML = '<img class="plus-img" src="/professionalism.6adffebe.png" alt="professionalism" />';
//         professionalismBtn.classList.add('active');
//         professionalismBtnMob.classList.add('active');
//         qualityBtn.classList.remove('active');
//         modernityBtn.classList.remove('active');
//         bonusesBtn.classList.remove('active');
//     } else if (newPlus === "quality") {
//         plusName.innerHTML = 'Якість';
//         plusInfo.innerHTML = 'Інвестували в найкраще обладнання та кращі продукти для догляду за волоссям та шкірою. Працюємо за принципом- якість в кожній деталі'; 
//         // plusImage.append(photo);
//         plusImage.innerHTML = '<img class="plus-img" src="/quality.92b2337c.png" alt="quality" />';
//         qualityBtn.classList.add('active');
//         professionalismBtn.classList.remove('active');
//         professionalismBtnMob.classList.remove('active');
//         modernityBtn.classList.remove('active');
//         bonusesBtn.classList.remove('active');
//     } else if (newPlus === "modernity") {
//         plusName.innerHTML = 'Сучасність';
//         plusInfo.innerHTML = 'Використовуємо тільки сучасні інструменти та чоловічу косметику, а в нашому Барбершопі крута чоловіча атмосфера з сучасним інтер’єром'; 
//         plusImage.innerHTML = '<img class="plus-img" src="/modernity.44d8ca5a.png" alt="modernity" />';
//         modernityBtn.classList.add('active');
//         professionalismBtn.classList.remove('active');
//         professionalismBtnMob.classList.remove('active');
//         bonusesBtn.classList.remove('active');
//         qualityBtn.classList.remove('active');
//     } else if (newPlus === "bonuses") {
//         plusName.innerHTML = 'Бонуси';
//         plusInfo.innerHTML = 'Безкоштовні напої клієнтам, та програми лояльності'; 
//         plusImage.innerHTML = '<img class="plus-img" src="/bonuses.6b6da01e.png" alt="bonuses" />';
//         bonusesBtn.classList.add('active');
//         professionalismBtn.classList.remove('active');
//         professionalismBtnMob.classList.remove('active');
//         modernityBtn.classList.remove('active');
//         qualityBtn.classList.remove('active');
//     }      
// }
 







// const clone = mobBtnList.clone();
// clone.insertAdjacentHTML("afterend", '.plus-char');

// mobBtnList.clone().insertBefore('.plus-char');
// var clonedElement = mobBtnList.cloneNode(true);
// document.body.appendChild(clonedElement);