

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Забороняємо формі відправлятись автоматично

    var formData = new FormData(this); // Отримуємо дані з форми
    var userName = formData.get('name');
    var userEmail = formData.get('email');
    var userMessage = formData.get('message');

  // Виводимо дані з форми у консоль
  for (var pair of formData.entries()) {
    // console.log(pair[0] + ': ' + pair[1]);
    }
    let message = `Ім'я:${userName}. 
Електронна адреса: ${userEmail}.
Повідомлення: ${userMessage}`; 
    // console.log(`${message}`);
    
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
 })
    };
    fetch(`https://api.telegram.org/bot6444843684:AAHgazEpVJzBoNaJE6XRUbWy78z-U5jn3yE/sendMessage?chat_id=-1001888340575`, options)
  .then(response => response.json())
  .then(response => console.log(response))
        .catch(err => console.error(err));
    
    
event.currentTarget.reset();
});

document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо елемент цільової секції
  var targetSection = document.querySelector('.target-section');
  
  // Перевіряємо, чи існує цільова секція
  if (targetSection) {
    // Прокручуємо до верхньої частини цільової секції
    targetSection.scrollIntoView();
  }
});