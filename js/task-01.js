const categoryItem = document.querySelectorAll('.item');

const consoleOutput = item => {
  const header = item.firstElementChild;
  const categoryListItem = item.querySelectorAll('.item li');
  console.log(
    `Category: ${header.textContent}\nElements: ${categoryListItem.length}\n\n`
  );
};

console.log(`Number of categories: ${categoryItem.length}\n\n`);
categoryItem.forEach(consoleOutput);
