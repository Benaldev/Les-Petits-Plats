export const getRecipes = async () => {
    try {
        const response = await fetch("./data/recipes.json");
        const data = await response.json(); //lit la réponse et la transforme en objet (ou tableau, ici en objet) JavaScript
        return data.recipes;
    } catch (error) {
        console.error("Erreur lors du chargement des recettes:", error);
        return[];
    }
    
};