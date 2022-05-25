const body = document.querySelector('body')
const changeColorBtn = body.querySelector('.change-color');
const description = body.querySelector('.color')

changeColorBtn.addEventListener('click', onBodyBgChange);

function onBodyBgChange() {
  body.style.backgroundColor = getRandomHexColor();
  description.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

