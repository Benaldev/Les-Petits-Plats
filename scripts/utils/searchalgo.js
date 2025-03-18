//algo avec boucle for

export const searchRecipe = (text, recipes) => {
    const lowerText = text.toLowerCase(); // convertir le texte en minuscules
    const filteredRecipes = []; // tableau pour stocker les recettes filtrées

    // boucle for pour parcourir chaque recette
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        // check le nom de la recette
        const nameMatch = recipe.name.toLowerCase().includes(lowerText); //La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

        // check les ingrédients
        let ingredientMatch = false;
        for (let j = 0; j < recipe.ingredients.length; j++) {
            if (recipe.ingredients[j].ingredient.toLowerCase().includes(lowerText)) {
                ingredientMatch = true;
                break; // sortir de la boucle si un ingrédient correspond
            }
        }

        // check les ustensiles
        let ustensilMatch = false;
        for (let j = 0; j < recipe.ustensils.length; j++) {
            if (recipe.ustensils[j].toLowerCase().includes(lowerText)) {
                ustensilMatch = true;
                break; 
            }
        }

        // Si l'un des critères correspond, on ajoute la recette au tableau filtré
        if (nameMatch || ingredientMatch || ustensilMatch) {
            filteredRecipes.push(recipe);
        }
    }

    return filteredRecipes; // retourne les recettes filtrées
};

export const setupSearch = (recipes, displayResults) => {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", (e) => {
        const text = e.target.value;
        const results = searchRecipe(text, recipes); 
        displayResults(results);
    });
};