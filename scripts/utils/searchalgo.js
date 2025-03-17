export const searchRecipe = (text, recipes) => {
    const lowerText = text.toLowerCase(); // convertir le texte en minuscules

    return recipes.filter(recipe => {
        // nom rectte
        const nameMatch = recipe.name.toLowerCase().includes(lowerText);

        // ingrédients
        const ingredientMatch = recipe.ingredients.some(ingredient => //La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
            ingredient.ingredient.toLowerCase().includes(lowerText)
        );

        // ustensiles
        const ustensilMatch = recipe.ustensils.some(ustensil =>
            ustensil.toLowerCase().includes(lowerText)
        );

        // retourne true si l'un des critères correspond
        return nameMatch || ingredientMatch || ustensilMatch;
    });
};

export const setupSearch = (recipes, displayResults) => {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", (e) => {
        const text = e.target.value;
        const results = searchRecipe(text, recipes); 
        displayResults(results);
    });
};