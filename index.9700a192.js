var onForm=document.querySelector(".form"),inputName=document.querySelector('input[name ="username"]'),inputEmail=document.querySelector('input[name ="email"]'),inputMessage=document.querySelector('textarea[name ="message"]'),formInput={username:"",email:"",message:""},changedOnForm=function(e){"email"===e.target.name?formInput.email=e.target.value:"message"===e.target.name?formInput.message=e.target.value:"username"===e.target.name&&(formInput.username=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(formInput))},fromLocal=JSON.parse(localStorage.getItem("feedback-form-state"));fromLocal&&(inputName.value=fromLocal.username,inputEmail.value=fromLocal.email,inputMessage.value=fromLocal.message,formInput.email=fromLocal.email,formInput.message=fromLocal.message,formInput.username=fromLocal.username);var submitForm=function(e){e.preventDefault();var a=e.target.elements,t=a.email,m=a.message,r=a.username;if(""===t.value||""===m.value||""===r.value)return alert("Please fill in all the fields!");console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()};onForm.addEventListener("input",changedOnForm),onForm.addEventListener("submit",submitForm);
//# sourceMappingURL=index.9700a192.js.map
