const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onValidInputValue);

function onValidInputValue(event) {

    if (event.currentTarget.value.length === 6) {
        event.currentTarget.classList = 'valid';
        return;
    }
    event.currentTarget.classList = 'invalid'
}