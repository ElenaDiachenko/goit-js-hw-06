const decrementBtn = document.querySelector("[data-action='decrement']");
const currentValue = document.querySelector('#value');
const incrementBtn = document.querySelector("[data-action='increment']");

let counterValue = 0;

const onDecrementBtn = () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
}
const onIncrementBtn = () => {
    counterValue += 1;
    currentValue.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn)