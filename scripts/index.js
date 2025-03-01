import { getRecipes } from "./dataFetcher.js";


const displayRecipes = async () => {

    const recipesData = await getRecipes;
    const recipesCards = document.querySelector(".recipes-cards-container");

    console.log(recipesData)
    
}

window.addEventListener("load", displayRecipes)