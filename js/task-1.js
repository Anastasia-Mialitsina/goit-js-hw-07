const categoriesList = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categoriesList.length}`);

const categories = document.querySelectorAll("ul#categories li.item");
categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemCount = category.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Element: ${itemCount}`);
});
