const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const createItem = item => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = item;
  ingredientItem.classList.add('item');
  // console.log(ingredientItem);
  return ingredientItem.outerHTML;
};

const ingredientMarkupString = ingredients.map(createItem).join('');

ingredientList.innerHTML = ingredientMarkupString;
