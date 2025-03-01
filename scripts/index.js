import { getRecipes } from "./dataFetcher.js";
import { Recipe } from "./class.js";

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
};



window.addEventListener("load", displayRecipes);
