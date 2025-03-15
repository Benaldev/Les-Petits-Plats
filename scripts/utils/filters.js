export const displayFilterIngredients = (recipesData) => {
    const ingredientContainer = document.querySelector(".filter-ingredients");

    const buttonIngredients = document.createElement("button");
    buttonIngredients.classList.add("button-ingredients");
    buttonIngredients.id = "button-filter";
    ingredientContainer.appendChild(buttonIngredients);

    const ingredientTextSymbol = document.createElement("div");
    ingredientTextSymbol.setAttribute("class", "text-symbol");
    buttonIngredients.appendChild(ingredientTextSymbol)

    const buttonIngredientsText = document.createElement("p");
    buttonIngredientsText.textContent = "Ingrédients";
    ingredientTextSymbol.appendChild(buttonIngredientsText)

    const buttonIngredientsAngleSymbol = document.createElement("i")
    buttonIngredientsAngleSymbol.setAttribute("class", "fa-solid fa-angle-down");
    ingredientTextSymbol.appendChild(buttonIngredientsAngleSymbol);

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

    const ingredientsSet = new Set(); //va nour permettre d'éviter répition des éléments. Le set est une collection d'éléments uniques

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

    //on cache l'input et la liste des ingredients. Au clic, ils apparaissent/disparaissent
    ingredientsSearch.style.display = "none";

    ingredientTextSymbol.addEventListener("click", () => {
        if (ingredientsSearch.style.display === "none") {
            ingredientsSearch.style.display = "block";
        } else {
            ingredientsSearch.style.display = "none";
        }
        buttonIngredientsAngleSymbol.classList.toggle("fa-angle-up");
        buttonIngredientsAngleSymbol.classList.toggle("fa-angle-down");
    })
};
