const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientRef = document.querySelector('#ingredients');

const itemsRef = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = ingredient;
  return itemRef;
});

ingredientRef.append(...itemsRef);

