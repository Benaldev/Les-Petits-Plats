export const searchRecipe = (text, recipes, selectedIngredients = [], selectedAppliances = [], selectedUstensils = []) => {
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

        // check les filtres sélectionnés
        const matchesSelectedIngredients = selectedIngredients.length === 0 ||
            selectedIngredients.every(ingredient =>  //every vérifie si tous les éléments d'un tableau satisfont une condition
                recipe.ingredients.some(recipeIngredient =>
                    recipeIngredient.ingredient.toLowerCase() === ingredient.toLowerCase()
                )
            );

        const matchesSelectedAppliances = selectedAppliances.length === 0 ||
            selectedAppliances.includes(recipe.appliance.toLowerCase());

        const matchesSelectedUstensils = selectedUstensils.length === 0 ||
            selectedUstensils.every(ustensil =>
                recipe.ustensils.includes(ustensil.toLowerCase())
            );

        // retourne true si l'un des critères correspond et que les filtres sélectionnés sont respectés
        return (nameMatch || ingredientMatch || ustensilMatch) &&
            matchesSelectedIngredients &&
            matchesSelectedAppliances &&
            matchesSelectedUstensils;
    });
};

export const setupSearch = (recipes, displayResults) => {
    // récupérer le champ de recherche et le bouton de recherche
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-bar-btn");

    // récupère les filtres sélectionnés
    const getSelectedFilters = () => {

        const selectedIngredientsElements = document.querySelectorAll(".selected-filter.ingredient"); // c'est une nodeList donc on le transforme en tableau à la ligne suivante
        const selectedIngredients = Array.from(selectedIngredientsElements).map(element => {
            return element.textContent.trim().toLowerCase();
        });

        const selectedAppliancesElements = document.querySelectorAll(".selected-filter.appliance");
        const selectedAppliances = Array.from(selectedAppliancesElements).map(element => {
            return element.textContent.trim().toLowerCase();
        });

        const selectedUstensilsElements = document.querySelectorAll(".selected-filter.ustensil");
        const selectedUstensils = Array.from(selectedUstensilsElements).map(element => {
            return element.textContent.trim().toLowerCase();
        });

        // retourne les filtres sélectionnés
        return {
            selectedIngredients: selectedIngredients,
            selectedAppliances: selectedAppliances,
            selectedUstensils: selectedUstensils
        };
    };

    // clic sur le bouton de recherche
    searchButton.addEventListener("click", () => {
        const text = searchInput.value;

        const filters = getSelectedFilters();
        const selectedIngredients = filters.selectedIngredients;
        const selectedAppliances = filters.selectedAppliances;
        const selectedUstensils = filters.selectedUstensils;

        // Filtre les recettes
        const results = searchRecipe(text, recipes, selectedIngredients, selectedAppliances, selectedUstensils);

        displayResults(results);
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const text = searchInput.value;

            const filters = getSelectedFilters();
            const selectedIngredients = filters.selectedIngredients;
            const selectedAppliances = filters.selectedAppliances;
            const selectedUstensils = filters.selectedUstensils;

            // filtrer les recettes
            const results = searchRecipe(text, recipes, selectedIngredients, selectedAppliances, selectedUstensils);

            displayResults(results);
        }
    });
};

//La méthode .filter() parcourt toutes les recettes du tableau. À chaque recette, elle teste si au moins un des critères correspond (nameMatch, ingredientMatch, ou ustensilMatch). Si une recette correspond, elle est ajoutée aux résultats. Puis, l’algorithme passe à la recette suivante et fait le même test.
//.some() permet d'optimiser la recherche. On aurait pu utiliser filter ou map mais elles continuerait à parcour tt le tableau même après avoir trouvé une correspondance.  