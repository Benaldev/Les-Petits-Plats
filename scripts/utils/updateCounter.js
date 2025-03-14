//COUNTER

export function updateCounter() {
    const recipeCards = document.querySelectorAll(".recipe-card");
    const counter = document.querySelector(".counter");
  
    counter.innerHTML= `<h3>${recipeCards.length} recettes`
  }