const myForm = document.querySelector('#myForm');
const name = myForm.querySelector('.client');
const email = myForm.querySelector('.mail');
const subBtn = myForm.querySelector('#submit');
const comment = myForm.querySelector('.comments');
console.log(name);
//переменные необходимые для валидации формы
subBtn.addEventListener('click', e => {
    event.preventDefault();
    if(validateForm(myForm)) {
        myForm.reset();
    }
});//обработчик событий и предотвратитель действия по клику на сабмит формы


email.addEventListener('keydown', e =>{
    let isLat = false;
    let isControl = false;
    var re=new RegExp('^[a-zA-Z @ . 0-9]+$');
    if (re.test(event.key)) {
        isLat = true;
        console.log(event.key);
    } 
    
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
        console.log(event.key);
    }
    if (isLat == false && isControl == false) {
        event.preventDefault();
        console.log(event.key);
    }
});//функция валидации данных
name.addEventListener('keydown', function (event) {
    let isDigit = false;
    let isControl = false;
    var re=new RegExp('^[a-zA-Zа-яА-Я]+$');
    if (re.test(event.key)) {
        isDigit = true;
        console.log(event.key);
    }
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
        console.log(event.key);
    }
    if (isDigit == false && isControl == false) {
        event.preventDefault();
        console.log(event.key);
    }
});


//функция валидации формы
function validateForm(form) {
    let valid = true;

    //проверка каждого инпута
    if (!validateField(name)) {
        valid = false;
    }
   
    //проверка владельца карты
    if (!validateField(email)) {
        valid = false;
    }
    //проверка валидации свв кода
    if (!validateField(comment)) {
        valid = false;
    }
    return valid;
} 
//функция валидации полей присваивание стилей в зависимости от данных
function validateField(field) {
    if (!field.checkValidity()){
        field.classList.add('error');
        return false;
    }
    else {
        field.classList.remove('error');
        return true;
    }
}