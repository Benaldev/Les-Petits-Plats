export class Recipe {
  constructor(data) {
    this.id = data.id;
    this.image = data.image;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  recipeTemplate() {
    return `
        <article class="recipe-card">
            <img src="./recipes/recipes/${this.image}" alt="${this.name}" />
            <h3>${this.name}</h3>
            <h4>RECETTE</h4>
            <p>${this.description}</p>
            <h4>INGREDIENTS</h4>
            <p>${this.ingredients}<p>
        </article>
        `;
  }
}
