import { useContext } from "react";
import { RecipeListContext } from "../recipeListContext";
import Recipe from "./Recipe";

function SearchResults() {
    const {listData} = useContext(RecipeListContext)

    const displayList = listData.map(function(recipe) {
        return (
            <Recipe 
                key={recipe.id}
                recipe={recipe}
            />
        )
    })

    return (
        <div>
            {displayList}
        </div>
    )
}

export default SearchResults