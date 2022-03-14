'use strict'

document.addEventListener('blur', function (event) {
// Validate the field
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

    if (connectedValidation && message && !isValid) {
        connectedValidation.innerText = message;
    } else {
        connectedValidation.innerText = '';
    }
}, true);

const handleIncrementDecrement = (event) => {
    event.preventDefault();

    const target = event.target;
    if (target.tagName=="INPUT" && target.type == "button")
    {
        let prod = target.id.split('-')[0];
        prod = document.getElementsByClassName(prod)[0];
    
        if (target.value == '+') {
            prod.value = Number(prod.value) + 1;
        }else {
            if (prod.value <= 0) return;
            prod.value -= 1;
        }
    }

}
const product = document.querySelector('.product')
product.addEventListener('click', handleIncrementDecrement);