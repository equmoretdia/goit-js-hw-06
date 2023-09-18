const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', event => {
  text.style.fontSize = `${event.currentTarget.value}px`;
  //   console.log(text.style.fontSize);
  //   console.log(event.currentTarget.value);
});
