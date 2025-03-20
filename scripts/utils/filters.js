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
    ingredientsSearch.setAttribute("class", "filter-search");
    buttonIngredients.appendChild(ingredientsSearch);

    const searchBarAndGlass = document.createElement("div");
    searchBarAndGlass.setAttribute("class", "search-bar-and-glass")
    ingredientsSearch.appendChild(searchBarAndGlass);

    const searchBarIngredients = document.createElement("input");
    searchBarIngredients.setAttribute("type", "search");
    searchBarIngredients.setAttribute("id", "ingredientsInput")
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
        ingredientsLi.setAttribute("class", "ingrList")
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

    //rechercher un ingrédient via l'input
    searchBarIngredients.addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase();
        const ingredientItems = document.querySelectorAll(".ingrList")

        ingredientItems.forEach((item) => {
            const ingredientName = item.textContent.toLowerCase();
            if (ingredientName.includes(text)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    //création d'une div affichant les ingrédients sélectionnés
    ingredientsList.addEventListener("click", (e) => {
        const ingredientItems = document.querySelectorAll(".ingrList")
        ingredientItems.forEach((item) => {
            const contentItem = item.textContent;
            if (contentItem === e.target.textContent) {
                const ingredientSelected = document.createElement("div")
                ingredientSelected.setAttribute("class", "selected-filter ingredient")
                ingredientSelected.innerHTML = `${contentItem} <i class="fa-solid fa-xmark delete-filter"></i>`
                ingredientContainer.appendChild(ingredientSelected)

                ingredientContainer.addEventListener("click", (e) => {
                    if (e.target.classList.contains("delete-filter")) {
                        e.target.parentElement.remove(); // suppr l'élément parent (le `div` sélectionné)
                    }
                });
            }
        })
    })

};



export const displayFilterAppliances = (recipesData) => {
    const appliancesContainer = document.querySelector(".filter-appliances");

    const buttonAppliances = document.createElement("button");
    buttonAppliances.classList.add("button-appliances");
    buttonAppliances.id = "button-filter";
    appliancesContainer.appendChild(buttonAppliances);

    const appliancesTextSymbol = document.createElement("div");
    appliancesTextSymbol.setAttribute("class", "text-symbol");
    buttonAppliances.appendChild(appliancesTextSymbol)

    const buttonAppliancesText = document.createElement("p");
    buttonAppliancesText.textContent = "Appareils";
    appliancesTextSymbol.appendChild(buttonAppliancesText)

    const buttonAppliancesAngleSymbol = document.createElement("i")
    buttonAppliancesAngleSymbol.setAttribute("class", "fa-solid fa-angle-down");
    appliancesTextSymbol.appendChild(buttonAppliancesAngleSymbol);

    const appliancesSearch = document.createElement("div");
    appliancesSearch.setAttribute("class", "filter-search");
    buttonAppliances.appendChild(appliancesSearch);

    const searchBarAndGlass = document.createElement("div");
    searchBarAndGlass.setAttribute("class", "search-bar-and-glass")
    appliancesSearch.appendChild(searchBarAndGlass);

    const searchBarAppliances = document.createElement("input");
    searchBarAppliances.setAttribute("type", "search");
    searchBarAndGlass.appendChild(searchBarAppliances);

    const searchBarGlass = document.createElement("i");
    searchBarGlass.setAttribute("class", "fa-solid fa-magnifying-glass");
    searchBarAndGlass.appendChild(searchBarGlass)

    const appliancesList = document.createElement("ul");
    appliancesSearch.appendChild(appliancesList);

    const appliancesSet = new Set();

    recipesData.forEach((recipes) => {
        appliancesSet.add(recipes.appliance);
    });

    appliancesSet.forEach((appliance) => {
        const appliancesLi = document.createElement("li");
        appliancesLi.setAttribute("class", "appliList")
        appliancesLi.textContent = appliance;
        appliancesList.appendChild(appliancesLi);
    });

    appliancesSearch.style.display = "none";

    appliancesTextSymbol.addEventListener("click", () => {
        if (appliancesSearch.style.display === "none") {
            appliancesSearch.style.display = "block";
        } else {
            appliancesSearch.style.display = "none";
        }
        buttonAppliancesAngleSymbol.classList.toggle("fa-angle-up");
        buttonAppliancesAngleSymbol.classList.toggle("fa-angle-down");
    })

    searchBarAppliances.addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase();
        const applianceItems = document.querySelectorAll(".appliList")

        applianceItems.forEach((item) => {
            const applianceName = item.textContent.toLowerCase();
            if (applianceName.includes(text)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    appliancesList.addEventListener("click", (e) => {
        const applianceItems = document.querySelectorAll(".appliList")
        applianceItems.forEach((item) => {
            const contentItem = item.textContent;
            if (contentItem === e.target.textContent) {
                const applianceSelected = document.createElement("div")
                applianceSelected.setAttribute("class", "selected-filter appliance")
                applianceSelected.innerHTML = `${contentItem} <i class="fa-solid fa-xmark delete-filter"></i>`
                appliancesContainer.appendChild(applianceSelected)

                appliancesContainer.addEventListener("click", (e) => {
                    if (e.target.classList.contains("delete-filter")) {
                        e.target.parentElement.remove(); // suppr l'élément parent (le `div` sélectionné)
                    }
                });
            }
        })
    })
};

export const displayFilterUstensils = (recipesData) => {
    const ustensilsContainer = document.querySelector(".filter-ustensils");

    const buttonUstensils = document.createElement("button");
    buttonUstensils.classList.add("button-ustensils");
    buttonUstensils.id = "button-filter";
    ustensilsContainer.appendChild(buttonUstensils);

    const ustensilsTextSymbol = document.createElement("div");
    ustensilsTextSymbol.setAttribute("class", "text-symbol");
    buttonUstensils.appendChild(ustensilsTextSymbol)

    const buttonUstensilsText = document.createElement("p");
    buttonUstensilsText.textContent = "Ustensiles";
    ustensilsTextSymbol.appendChild(buttonUstensilsText)

    const buttonUstensilsAngleSymbol = document.createElement("i")
    buttonUstensilsAngleSymbol.setAttribute("class", "fa-solid fa-angle-down");
    ustensilsTextSymbol.appendChild(buttonUstensilsAngleSymbol);

    const ustensilsSearch = document.createElement("div");
    ustensilsSearch.setAttribute("class", "filter-search");
    buttonUstensils.appendChild(ustensilsSearch);

    const searchBarAndGlass = document.createElement("div");
    searchBarAndGlass.setAttribute("class", "search-bar-and-glass")
    ustensilsSearch.appendChild(searchBarAndGlass);

    const searchBarUstensils = document.createElement("input");
    searchBarUstensils.setAttribute("type", "search");
    searchBarAndGlass.appendChild(searchBarUstensils);

    const searchBarGlass = document.createElement("i");
    searchBarGlass.setAttribute("class", "fa-solid fa-magnifying-glass");
    searchBarAndGlass.appendChild(searchBarGlass)

    const ustensilsList = document.createElement("ul");
    ustensilsSearch.appendChild(ustensilsList);

    const ustensilsSet = new Set();

    recipesData.forEach((recipes) => {
        recipes.ustensils.forEach((ustensils) => {
            ustensilsSet.add(ustensils);
        });
    });

    ustensilsSet.forEach((ustensils) => {
        const ustensilsLi = document.createElement("li");
        ustensilsLi.setAttribute("class", "ustList")
        ustensilsLi.textContent = ustensils;
        ustensilsList.appendChild(ustensilsLi);
    });

    ustensilsSearch.style.display = "none";

    ustensilsTextSymbol.addEventListener("click", () => {
        if (ustensilsSearch.style.display === "none") {
            ustensilsSearch.style.display = "block";
        } else {
            ustensilsSearch.style.display = "none";
        }
        buttonUstensilsAngleSymbol.classList.toggle("fa-angle-up");
        buttonUstensilsAngleSymbol.classList.toggle("fa-angle-down");
    })

    searchBarUstensils.addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase();
        const ustensilsItems = document.querySelectorAll(".ustList")

        ustensilsItems.forEach((item) => {
            const ustensilName = item.textContent.toLowerCase();
            if (ustensilName.includes(text)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    ustensilsList.addEventListener("click", (e) => {
        const ustensilItems = document.querySelectorAll(".ustList")
        ustensilItems.forEach((item) => {
            const contentItem = item.textContent;
            if (contentItem === e.target.textContent) {
                const ustensilSelected = document.createElement("div")
                ustensilSelected.setAttribute("class", "selected-filter  ustensil")
                ustensilSelected.innerHTML = `${contentItem} <i class="fa-solid fa-xmark delete-filter"></i>`
                ustensilsContainer.appendChild(ustensilSelected)

                ustensilsContainer.addEventListener("click", (e) => {
                    if (e.target.classList.contains("delete-filter")) {
                        e.target.parentElement.remove(); // suppr l'élément parent (le `div` sélectionné)
                    }
                });
            }
        })
    })

};
