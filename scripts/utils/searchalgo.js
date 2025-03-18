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
    const searchButton = document.getElementById("search-bar-btn");

    searchButton.addEventListener("click", () => {
        const text = searchInput.value;
        const results = searchRecipe(text, recipes); 
        displayResults(results);
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { // Vérifier si la touche "Entrée" est pressée
            const text = searchInput.value; // Récupérer la valeur de l'input
            const results = searchRecipe(text, recipes); // Lancer la recherche
            displayResults(results); // Afficher les résultats
        }
    });
};

//La méthode .filter() parcourt toutes les recettes du tableau. À chaque recette, elle teste si au moins un des critères correspond (nameMatch, ingredientMatch, ou ustensilMatch). Si une recette correspond, elle est ajoutée aux résultats. Puis, l’algorithme passe à la recette suivante et fait le même test.
//.some() permet d'optimiser la recherche. On aurait pu utiliser filter ou map mais elles continuerait à parcour tt le tableau même après avoir trouvé une correspondance.  