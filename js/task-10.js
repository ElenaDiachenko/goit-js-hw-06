const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input')


createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", resetBoxes);

function getAmount() {
  let amount = inputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxElements = [];
  const sizeBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
     boxEl.style.width = `${sizeBox + i * 10}px`;
     boxEl.style.height = `${sizeBox + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxElements.push(boxEl)
  }

  boxesRef.append(...boxElements);
}

function resetBoxes() {
  boxes.innerHTML = '';
  inputRef.value = '';
   
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
