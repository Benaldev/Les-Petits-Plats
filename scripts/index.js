import { getRecipes } from "./dataFetcher.js";
import { Recipe } from "./utils/recipeClass.js";
import { updateCounter } from "./utils/updateCounter.js"
import { displayFilterIngredients } from "./utils/filters.js"
import { displayFilterAppliances } from "./utils/filters.js"
import { displayFilterUstensils } from "./utils/filters.js";

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

    displayFilterIngredients(recipesData);
    displayFilterAppliances(recipesData);
    displayFilterUstensils(recipesData);
};


window.addEventListener("load", displayRecipes);