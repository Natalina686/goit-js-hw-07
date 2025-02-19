const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});