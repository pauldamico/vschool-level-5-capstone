import axios from "axios";
import { useContext, useEffect } from "react";
import { RecipeListContext } from "../recipeListContext";
 
function SavedRecipes() {
    const {savedRecipesList, setSavedRecipesList} = useContext(RecipeListContext)

    useEffect((userId) => {
        axios.get(`/recipes/636d4c92ed5a7c76e2ec86f7`)
            .then(res => setSavedRecipesList(res.data))
            .catch(err => console.log(err))
    }, [])

    const displayRecipesList = savedRecipesList?.map(function (recipe) {
        return (
            <div key={recipe.recipeId}>
                <p>{recipe.recipeTitle}</p>
                <img src={recipe.recipeImg} alt={recipe.recipeTile} />
            </div>
        )
    })
 
    return (
        <div>
            {displayRecipesList}
        </div>
    )
 
}
 
export default SavedRecipes