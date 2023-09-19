function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorCode = document.querySelector('.color');
const colorChangeButton = document.querySelector('.change-color');

colorChangeButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  colorCode.textContent = randomColor;
  body.style.background = randomColor;
});
