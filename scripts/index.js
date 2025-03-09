import { getRecipes } from "./dataFetcher.js";
import { Recipe } from "./class.js";

//MENU CARDS
//const allRecipes = [];

const displayRecipes = async () => {
  const recipesData = await getRecipes();
  const recipesCardsContainer = document.querySelector(
    ".recipes-cards-container"
  );

//  recipesData.forEach((recette) => {
//    const recipe = new Recipe(recette);
//    allRecipes.push(recipe);
//  });

//  recipesCardsContainer.innerHTML = allRecipes
//    .map((recipe) => recipe.recipeTemplate())
//    .join("");
//};

recipesCardsContainer.innerHTML = recipesData
    .map(recette => {
        const recipe = new Recipe(recette); 
        return recipe.recipeTemplate(); 
    })
    .join("");

    updateCounter();
};



//COUNTER

function updateCounter() {
  const recipeCards = document.querySelectorAll(".recipe-card");
  const counter = document.querySelector(".counter");

  counter.innerHTML= `<h3>${recipeCards.length} recettes`
}

window.addEventListener("load", displayRecipes);