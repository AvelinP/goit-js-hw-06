"use strict";

const categoriesList = document.querySelector("#categories");
console.log(categoriesList);

const items = categoriesList.querySelectorAll("li.item");
console.log(items);

const categoriesNr = items.length;
console.log("Number of categories:", categoriesNr);

items.forEach((item) => {
  const titles = item.querySelector("h2");
  const elements = item.querySelectorAll("li");
  const categoryTitle = titles.textContent;
  const numberOfElements = elements.length;

  console.log("\nCategory:", categoryTitle);
  console.log("Elements:", numberOfElements);
});
