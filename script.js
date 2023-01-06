let form = document.querySelector('form');
let email = document.querySelector('#email');
let error = document.querySelector('.error');
let btn = document.querySelector('.btn-submit');
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

btn.addEventListener('click', (event) => {
    if(email.value == ''){
        event.preventDefault();
        emailValidation();
    }
});


function noValidate(){
    email.style.border = '1px solid hsl(354, 100%, 66%)';
    error.style.display = 'block';
}
function validate(){
    email.style.border = '1px solid hsl(223, 100%, 88%)';
    error.style.display = 'none';
}
function emailValidation(){
    if(!emailRegex.test(email.value)){
        noValidate();
    }
    else{
        validate();
    }
}