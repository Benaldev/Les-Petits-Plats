export const getRecipes = async () => {
    try {
        const data = await fetch("./data/recipes.js");
        return data.recipes;
    } catch (error) {
        console.error("Erreur lors du chargement des recettes:", error);
        return[];
    }
};