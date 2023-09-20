function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector('#controls input');
const createButton = number.nextElementSibling;
const destroyButton = createButton.nextElementSibling;
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = number.value;
  let initialSize = 30;
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement('div');
    boxes.append(div);
    div.style.margin = '5px 0';
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${initialSize}px`;
    div.style.height = `${initialSize}px`;
    initialSize += 10;
  }
}

function destroyBoxes() {
  const divsToRemove = boxes.children;
  while (divsToRemove.length > 0) {
    divsToRemove[0].remove();
  }
}
