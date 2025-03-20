//algo avec boucle for

export const searchRecipe = (text, recipes, selectedIngredients = [], selectedAppliances = [], selectedUstensils = []) => {
    const lowerText = text.toLowerCase(); // convertir le texte en minuscules
    const filteredRecipes = []; // tableau pour stocker les recettes filtrées

    // boucle pour parcourir chaque recette
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        const nameMatch = recipe.name.toLowerCase().includes(lowerText);

        let ingredientMatch = false;
        for (let j = 0; j < recipe.ingredients.length; j++) {
            if (recipe.ingredients[j].ingredient.toLowerCase().includes(lowerText)) {
                ingredientMatch = true;
                break; // sortir de la boucle si un ingrédient correspond
            }
        }

        let ustensilMatch = false;
        for (let j = 0; j < recipe.ustensils.length; j++) {
            if (recipe.ustensils[j].toLowerCase().includes(lowerText)) {
                ustensilMatch = true;
                break;
            }
        }

        let matchesSelectedIngredients = true;
        if (selectedIngredients.length > 0) {
            matchesSelectedIngredients = true; // on suppose que c'est vrai par défaut
            for (let k = 0; k < selectedIngredients.length; k++) {
                const selectedIngredient = selectedIngredients[k].toLowerCase();
                let ingredientFound = false;
                for (let l = 0; l < recipe.ingredients.length; l++) {
                    if (recipe.ingredients[l].ingredient.toLowerCase() === selectedIngredient) {
                        ingredientFound = true;
                        break;
                    }
                }
                if (!ingredientFound) {
                    matchesSelectedIngredients = false; // si un ingrédient n'est pas trouvé, la recette ne correspond pas
                    break;
                }
            }
        }

        let matchesSelectedAppliances = true; 
        if (selectedAppliances.length > 0) {
            const recipeAppliance = recipe.appliance.toLowerCase(); 
            for (let k = 0; k < selectedAppliances.length; k++) {
                if (selectedAppliances[k].toLowerCase() !== recipeAppliance) {
                    matchesSelectedAppliances = false; 
                    break; 
                }
            }
        }

        let matchesSelectedUstensils = true;
        if (selectedUstensils.length > 0) {
            matchesSelectedUstensils = true;
            for (let k = 0; k < selectedUstensils.length; k++) {
                const selectedUstensil = selectedUstensils[k].toLowerCase();
                let ustensilFound = false;
                for (let l = 0; l < recipe.ustensils.length; l++) {
                    if (recipe.ustensils[l].toLowerCase() === selectedUstensil) {
                        ustensilFound = true;
                        break;
                    }
                }
                if (!ustensilFound) {
                    matchesSelectedUstensils = false; // si un ustensile n'est pas trouvé, la recette ne correspond pas
                    break;
                }
            }
        }

        // Si l'un des critères correspond ET que les filtres sont respectés, on ajoute la recette
        if ((nameMatch || ingredientMatch || ustensilMatch) &&
            matchesSelectedIngredients &&
            matchesSelectedAppliances &&
            matchesSelectedUstensils) {
            filteredRecipes.push(recipe);
        }
    }

    return filteredRecipes;
};

export const setupSearch = (recipes, displayResults) => {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-bar-btn");

    // fonction pour récupérer les filtres sélectionnés
    const getSelectedFilters = () => {
        const selectedIngredientsElements = document.querySelectorAll(".selected-filter.ingredient");
        const selectedIngredients = [];
        for (let i = 0; i < selectedIngredientsElements.length; i++) {
            selectedIngredients.push(selectedIngredientsElements[i].textContent.trim().toLowerCase());
        }

        const selectedAppliancesElements = document.querySelectorAll(".selected-filter.appliance");
        const selectedAppliances = [];
        for (let i = 0; i < selectedAppliancesElements.length; i++) {
            selectedAppliances.push(selectedAppliancesElements[i].textContent.trim().toLowerCase());
        }

        const selectedUstensilsElements = document.querySelectorAll(".selected-filter.ustensil");
        const selectedUstensils = [];
        for (let i = 0; i < selectedUstensilsElements.length; i++) {
            selectedUstensils.push(selectedUstensilsElements[i].textContent.trim().toLowerCase());
        }

        return { selectedIngredients, selectedAppliances, selectedUstensils };
    };

    // clic sur le bouton de recherche
    searchButton.addEventListener("click", () => {
        const text = searchInput.value; // Récupérer le texte de recherche
        const { selectedIngredients, selectedAppliances, selectedUstensils } = getSelectedFilters(); // Récupérer les filtres
        const results = searchRecipe(text, recipes, selectedIngredients, selectedAppliances, selectedUstensils); // Filtrer les recettes
        displayResults(results); // Afficher les résultats
    });

    // touche entrée 
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const text = searchInput.value;
            const { selectedIngredients, selectedAppliances, selectedUstensils } = getSelectedFilters();
            const results = searchRecipe(text, recipes, selectedIngredients, selectedAppliances, selectedUstensils);
            displayResults(results);
        }
    });
};