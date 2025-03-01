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
        <article class="recipe-card>
            <img src="./recipes/${this.image}" alt="${this.name}">
            <h3>${this.name}</h3>
            <p>${this.description}</p>
        </article>
        `;
  }
}
