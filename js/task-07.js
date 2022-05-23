const refs = {
    input: document.querySelector('#font-size-control'),
    descriptionText: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.descriptionText.style.fontSize = `${event.currentTarget.value}px`
}
