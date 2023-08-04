// const throttle = require('lodash.throttle');
const onForm = document.querySelector('.form');
let inputName = document.querySelector('input[name ="username"]');
let inputEmail = document.querySelector('input[name ="email"]');
let inputMessage = document.querySelector('textarea[name ="message"]');


const formInput = {
    username: "",
    email: "",
    message: "",
};

// Створюємо ф-ю, яка зберігає в локальне сховище нові властивості "email" і "message".
const changedOnForm = event => {
    if(event.target.name === "email") {
        formInput.email = event.target.value;
    } else if (event.target.name === "message"){
        formInput.message = event.target.value;
    } else if (event.target.name === "username"){
        formInput.username = event.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
}

// Отримуємо дані з локального сховища
const fromLocal = JSON.parse(localStorage.getItem('feedback-form-state'));
// Перевіряємо стан сховища і якщо там є дані, то заповнюємо ними форму
if (fromLocal) {
    inputName.value = fromLocal.username;
  inputEmail.value = fromLocal.email;
  inputMessage.value = fromLocal.message;
  formInput.email = fromLocal.email;
    formInput.message = fromLocal.message;
    formInput.username = fromLocal.username;
}

const submitForm = (event) => {
  event.preventDefault();
  const {elements: { email, message, username}} = event.target;

  if (email.value === "" || message.value === "" || username.value === "") {
      return alert("Please fill in all the fields!");
  }
  // При натисканні кнопки submit виводимо дані зі сховища в консоль, очищаємо сховище та форму
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

onForm.addEventListener('input', changedOnForm);
onForm.addEventListener("submit", submitForm);




// -----------------------------------
// document.getElementById("myForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Забороняємо формі відправлятись автоматично

//   var formData = new FormData(this); // Отримуємо дані з форми
//   var chatId = "5187801485"; // Замініть на ваш chatId, отриманий від Телеграму

//   // Відправляємо POST-запит на API Телеграму
//   fetch(`https://api.telegram.org/bot6444843684:AAHgazEpVJzBoNaJE6XRUbWy78z-U5jn3yE/sendMessage?chat_id=5187801485&text=Всім привіт!`, {
//     method: "POST",
//     body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Результат відправки повідомлення в Телеграм
//     // Додайте код для обробки успішної відправки повідомлення
//   })
//   .catch(error => {
//     console.error(error); // Помилка відправки повідомлення в Телеграм
//     // Додайте код для обробки помилки відправки повідомлення
//   });
// });

const token = '6444843684:AAHgazEpVJzBoNaJE6XRUbWy78z-U5jn3yE';
let inputConfig = input.config();
let message = `Hello`;
console.log(`${message}`);
const options = {
  method: 'POST',
  Host: 'api.telegram.org:443',
  headers: {
    Accept: 'application/json',
    'User-Agent': 'Airtable',
    'Content-Type': 'application/json',    
  },
  body: JSON.stringify({
    text: `${message}`,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    disable_notification: true,
    reply_to_message_id: 0,
    chat_id: `${inputConfig.chat_id}`
 })
};
fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${inputConfig.chat_id}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));