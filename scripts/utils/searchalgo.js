export const searchRecipe = (text, recipes) => {
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(text.toLowerCase()); 
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