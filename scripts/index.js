import { getRecipes } from "./dataFetcher.js";
import { Recipe } from "./utils/recipeClass.js";
import { updateCounter } from "./utils/updateCounter.js"
import { displayFilterIngredients, displayFilterAppliances, displayFilterUstensils } from "./utils/filters.js"
import { setupSearch } from "./utils/searchalgo.js"

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

  const recipes = recipesData.map(recette => new Recipe(recette));

  const displayResults = (results) => {
    recipesCardsContainer.innerHTML = results
      .map(recipe => recipe.recipeTemplate())
      .join("");
    updateCounter();
  };

  // Afficher toutes les recettes au chargement initial
  displayResults(recipes); 

  // recherche
  setupSearch(recipes, displayResults); //à construire dans searchalgo.js

  // les filtres
  displayFilterIngredients(recipesData);
  displayFilterAppliances(recipesData);
  displayFilterUstensils(recipesData);
};


window.addEventListener("load", displayRecipes);