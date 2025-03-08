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
            <div class="card-text">
              <h3>${this.name}</h3>
              <h4>RECETTE</h4>
              <p class="description">${this.description}</p>
              <h4>INGREDIENTS</h4>
              <ul>
              ${this.ingredients.map((object) => {  //on map le tableau ingredients pour extraire les éléments de chacun des objets qui compose le tableau
                return `<li><p class="ingredient">${object.ingredient}</p>${object.quantity ? `<p class="quantity">${object.quantity}${object.unit ? `<span> ${object.unit}</span>`: ''}</p>` : ''} </li>` 
              }).join('')}
              </ul>
            <div>
        </article>
        `;
  }
}
