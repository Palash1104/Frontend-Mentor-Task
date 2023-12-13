const cardName = document.getElementById('cardName');
const cardAccount = document.getElementById('cardAccount');

const cardNumber = document.getElementById('cardNumber');
const cardNumberDisplay = document.getElementById('cardNumberDisplay');

const cardMonth = document.getElementById('cardMonth');
const cardMonthDisplay = document.getElementById('cardMonthDisplay');
const cardYear = document.getElementById('cardYear');
const cardYearDisplay = document.getElementById('cardYearDisplay');

const cardCVC = document.getElementById('cardCVC');
const cardCVCDisplay = document.getElementById('cardCVCDisplay');

const nameError = document.getElementById('nameError');
const numberError = document.getElementById('numberError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');
const cvcError = document.getElementById('cvcError');

const confiirmBtn = document.getElementById('confirmbtn');
const message = document.getElementById('message');
const formContainer = document.getElementById('formContainer');
const continueBtn = document.getElementById('continueBtn');

cardName.addEventListener('input', () => {
    cardAccount.innerHTML = cardName.value;

    if (cardName.value === '') {
        cardAccount.innerHTML = 'Jane Appleseed';
    }

    if (cardName.value.length == 0) {
        nameError.innerHTML = '';
    } else if (cardName.value.length >= 1 && cardName.value.length < 5) {
        nameError.innerHTML = 'Minimum 5 characters are required!!';
    } else if (cardName.value.length >= 5) {
        nameError.innerHTML = '';
    }
});

function preventNumbers(e) {
    let keycode = (e.keycode ? e.keycode : e.which);

    if (keycode > 47 && keycode < 58 || keycode > 95 && keycode < 107) {
        e.preventDefault();
    }
}

cardNumber.addEventListener('input', () => {
    // Removes any non-digit characters and adds a space after every 4 digits
    cardNumber.value = cardNumber.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');

    cardNumberDisplay.innerHTML = cardNumber.value;

    if (cardNumber.value === '') {
        cardNumberDisplay.innerHTML = '0000 0000 0000 0000';
    }

    if (cardNumber.value.length == 0) {
        numberError.innerHTML = '';
    } else if (cardNumber.value.length >= 1 && cardNumber.value.length < 19) {
        numberError.innerHTML = 'Exactly 16 Numbers are required!!';
    } else if (cardNumber.value.length == 19) {
        numberError.innerHTML = '';
    }
});

cardMonth.addEventListener('input', () => {
    cardMonth.value = cardMonth.value.replace(/\D/g, '')
    cardMonthDisplay.innerHTML = cardMonth.value;

    if (cardMonth.value === '') {
        cardMonthDisplay.innerHTML = '00';
    } else if (cardMonth.value != '') {
        monthError.innerHTML = '';
    }

    if (cardMonth.value > 12) {
        cardMonth.value = 12;
        cardMonthDisplay.innerHTML = cardMonth.value;
    }
});

cardYear.addEventListener('input', () => {
    cardYear.value = cardYear.value.replace(/\D/g, '')
    cardYearDisplay.innerHTML = cardYear.value;

    if (cardYear.value === '') {
        cardYearDisplay.innerHTML = '00';
    } else if (cardYear.value != '') {
        yearError.innerHTML = '';
    }

    if (cardYear.value > 30) {
        cardYear.value = 30;
        cardYearDisplay.innerHTML = cardYear.value;
    }

});

cardCVC.addEventListener('input', () => {
    cardCVC.value = cardCVC.value.replace(/\D/g, '')
    cardCVCDisplay.innerHTML = cardCVC.value;

    if (cardCVC.value === '') {
        cardCVCDisplay.innerHTML = '000';
    } else if (cardCVC.value != '') {
        cvcError.innerHTML = '';
    }
});

confiirmBtn.addEventListener('click', () => {
    if (cardName.value.length == 0) {
        nameError.innerHTML = 'Name is required!!';
    }

    if (cardNumber.value.length == 0) {
        numberError.innerHTML = 'Card Number is required!!';
    }

    if (cardMonth.value.length == 0) {
        monthError.innerHTML = 'Month is required!!';
    }
    if (cardMonth.value < 10 && cardMonth.value >= 1 && cardMonth.value[0] != '0') {
        cardMonth.value = '0' + cardMonth.value;
        cardMonthDisplay.innerHTML = cardMonth.value;
    }

    if (cardYear.value.length == 0) {
        yearError.innerHTML = 'Year is required!!';
    }
    if (cardYear.value < 10 && cardYear.value >= 1) {
        cardYear.value = '0' + cardYear.value;
        cardYearDisplay.innerHTML = cardYear.value;
    }

    if (cardCVC.value.length < 3) {
        cvcError.innerHTML = 'Exactly 3 Numbers are required!!';
    } else if (cardCVC.value.length == 3) {
        cvcError.innerHTML = '';
    }

    if (cardName.value.length >= 5 && cardNumber.value.length == 19 && cardMonth.value.length == 2 && cardYear.value.length == 2 && cardCVC.value.length == 3) {
        formContainer.style.display = 'none';
        message.style.visibility = 'visible';
        message.style.pointerEvents = 'all';
    }
});

continueBtn.addEventListener('click', () => {
    message.style.visibility = 'hidden';
    message.style.pointerEvents = 'none';
    formContainer.style.display = 'block';

    cardName.value = '';
    cardAccount.innerHTML = 'Jane Appleseed';
    cardNumber.value = '';
    cardNumberDisplay.innerHTML = '0000 0000 0000 0000';
    cardMonth.value = '';
    cardMonthDisplay.innerHTML = '00';
    cardYear.value = '';
    cardYearDisplay.innerHTML = '00';
    cardCVC.value = '';
    cardCVCDisplay.innerHTML = '000';
});