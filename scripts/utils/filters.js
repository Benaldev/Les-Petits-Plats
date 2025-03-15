export const displayFilterIngredients = (recipesData) => {
    const ingredientContainer = document.querySelector(".filter-ingredients");

    const buttonIngredients = document.createElement("button");
    buttonIngredients.classList.add("button-ingredients");
    buttonIngredients.id = "button-filter";
    buttonIngredients.textContent = "Ingrédients";

    const ingredientsSearch = document.createElement("div"); //le bloc qu'il faudra cacher
    ingredientsSearch.setAttribute("class", "ingredients-search");
    buttonIngredients.appendChild(ingredientsSearch);

    const searchBarAndGlass = document.createElement("div");
    searchBarAndGlass.setAttribute("class", "search-bar-and-glass")
    ingredientsSearch.appendChild(searchBarAndGlass);

    const searchBarIngredients = document.createElement("input");
    searchBarIngredients.setAttribute("type", "search");
    searchBarAndGlass.appendChild(searchBarIngredients);

    const searchBarGlass = document.createElement("i");
    searchBarGlass.setAttribute("class", "fa-solid fa-magnifying-glass");
    searchBarAndGlass.appendChild(searchBarGlass)

    const ingredientsList = document.createElement("ul");
    ingredientsSearch.appendChild(ingredientsList);

    const ingredientsSet = new Set();

    recipesData.forEach((recipes) => {
        recipes.ingredients.forEach((ingredients) => {
            ingredientsSet.add(ingredients.ingredient);
        });
    });

    ingredientsSet.forEach((ingredient) => {
        const ingredientsLi = document.createElement("li");
        ingredientsLi.textContent = ingredient;
        ingredientsList.appendChild(ingredientsLi);
    });

    ingredientContainer.appendChild(buttonIngredients);
};
