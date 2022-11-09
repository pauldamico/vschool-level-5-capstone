import { useContext } from "react";
import { RecipeListContext } from "../recipeListContext";

function RecipeDetails() {
    const {oneRecipe} = useContext(RecipeListContext)
    console.log(oneRecipe.extendedIngredients, "test list")
    const ingredients = oneRecipe?.extendedIngredients
    console.log(oneRecipe.sourceUrl)

    const ingredientList = ingredients?.map(function (item) {
        return (
            <p>{item.original}</p>
        )
    })


    return (
        <div>
            <h4>{oneRecipe.title}</h4>
            <p>Servings: {oneRecipe.servings}</p>
            <img src={oneRecipe.image} alt={oneRecipe.tile} />
            {ingredientList}
            <p>
            Find instructions on <a href={oneRecipe.sourceUrl} target="_blank" rel="noopener noreferrer">{oneRecipe.sourceName}</a>
            </p>
            <input />
            <button>Save to a list</button>
        </div>
    )
}

export default RecipeDetails