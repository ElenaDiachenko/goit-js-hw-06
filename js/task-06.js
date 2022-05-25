const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onValidInputValue);

function onValidInputValue(event) {
    const input = event.currentTarget;
    
    if ((input.value).trim().length === parseInt(input.dataset.length)) {
        input.classList = 'valid';
        return;
    }
    input.classList = 'invalid'
}


