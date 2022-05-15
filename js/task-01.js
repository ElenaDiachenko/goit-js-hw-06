
const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories : ${categoriesRef.length}`)

const message = [...categoriesRef]
    .map(category => `Category : ${category.children[0].textContent}
Elements : ${category.children[1].children.length}`)
    .join("\n")

console.log(message);



