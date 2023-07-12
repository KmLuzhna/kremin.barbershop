// const plesesButton = document.querySelector(".plus-btn");
const plusName = document.querySelector(".plus-name");
const plusInfo = document.querySelector(".plus-info");

function changePlus(newPlus) {
    if (newPlus === "professionalism") {
        plusName.innerHTML = 'Професійність';
        plusInfo.innerHTML = 'Відповідальні майстри від 7 років досвіду, які знаються на сучасних трендах, постійно вдосконалюються та можуть довести твій образ до ідеалу';
    } else if (newPlus === "quality") {
        plusName.innerHTML = 'Якість';
        plusInfo.innerHTML = 'Інвестували в найкраще обладнання та кращі продукти для догляду за волоссям та шкірою. Працюємо за принципом- якість в кожній деталі'; 
    } else if (newPlus === "modernity") {
        plusName.innerHTML = 'Сучасність';
        plusInfo.innerHTML = 'Використовуємо тільки сучасні інструменти та чоловічу косметику, а в нашому Барбершопі крута чоловіча атмосфера з сучасним інтер’єром'; 
    } else if (newPlus === "bonuses") {
        plusName.innerHTML = 'Бнуси';
        plusInfo.innerHTML = 'Безкоштовні напої клієнтам, та програми лояльності'; 
    }      
}
 