export const displayFilterIngredients = (recipesData) => {
    
    const ingredientContainer = document.querySelector(".filter-ingredients");

    const buttonIngredients = document.createElement("button");
    buttonIngredients.classList.add("button-ingredients")
    buttonIngredients.id = ("button-filter");
    buttonIngredients.textContent = "Ingrédients";

    const ingredientsList = document.createElement("ul");
    buttonIngredients.appendChild(ingredientsList)

    recipesData.forEach(recipes => {
        recipes.ingredients.forEach(ingredients => {
            const ingredientsLi = document.createElement("li");
            ingredientsLi.textContent = ingredients.ingredient;
            ingredientsList.appendChild(ingredientsLi); 
        });
    });
    
    ingredientContainer.appendChild(buttonIngredients)
    
}