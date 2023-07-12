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