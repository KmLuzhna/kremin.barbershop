document.getElementById("myForm").addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(this),n=t.get("name"),o=t.get("email"),a=t.get("message"),r=!0,i=!1,c=void 0;try{for(var l,s=t.entries()[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var g=l.value;console.log(g[0]+": "+g[1])}}catch(e){i=!0,c=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw c}}var d="Ім'я:".concat(n,". \nЕлектронна адреса: ").concat(o,".\nПовідомлення: ").concat(a);console.log("".concat(d));var m={method:"POST",Host:"api.telegram.org:443",headers:{Accept:"application/json","User-Agent":"Airtable","Content-Type":"application/json"},body:JSON.stringify({text:"".concat(d),parse_mode:"HTML",disable_web_page_preview:!0,disable_notification:!0,reply_to_message_id:0})};fetch("https://api.telegram.org/bot6444843684:AAHgazEpVJzBoNaJE6XRUbWy78z-U5jn3yE/sendMessage?chat_id=-760695570",m).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}));
//# sourceMappingURL=index.8e002d8e.js.map