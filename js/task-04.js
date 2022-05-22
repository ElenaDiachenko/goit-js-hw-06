const refs = {
 decrementBtn : document.querySelector("[data-action='decrement']"),
 currentValue : document.querySelector('#value'),
 incrementBtn : document.querySelector("[data-action='increment']"),
}

let counterValue = 0;

const onDecrementBtn = () => {
    counterValue -= 1;
    refs.currentValue.textContent = counterValue;
}
const onIncrementBtn = () => {
    counterValue += 1;
    refs.currentValue.textContent = counterValue;
}

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn)