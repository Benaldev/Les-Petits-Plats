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
            <div class="card-img">
              <span class="time">${this.time}min</span>
              <img src="./recipes/recipes/${this.image}" alt="${this.name}" />
            </div>
            <div class="card-text">
              <h4>${this.name}</h4>
              <h5>RECETTE</h5>
              <p class="description">${this.description}</p>
              <h5>INGREDIENTS</h5>
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
