let symbols = document.getElementById('firstInput');
let checkBoxNumeric = document.getElementById('numeric');
let checkBoxUppercase = document.getElementById('uppercase');
let checkBoxLowercase = document.getElementById('lowercase');
const field = document.querySelector('.field');
let result = document.getElementById('result');
let numbers = '0123456789';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

field.addEventListener('click', function() {
    if (event.target.type == 'submit') {
        result.value = random(symbols);
    }
})

function random(symbols) {
    let rand = '';
    if (checkBoxNumeric.checked) {
        rand += numbers;
    }
    if (checkBoxUppercase.checked) {
        rand += upperCase;
    }
    if (checkBoxLowercase.checked) {
        rand += lowerCase;
    }
    if(!checkBoxNumeric.checked && !checkBoxUppercase.checked && !checkBoxLowercase.checked){
        rand = "Choose the parametrs";
        return rand;
    }
    rand = rand.split('')
    .sort(() => Math.random() -0.5)
    .slice(0, symbols.value)
    .join('');
    return rand;
}