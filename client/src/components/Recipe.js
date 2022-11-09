import { useContext } from "react";
import { RecipeListContext } from "../recipeListContext";
import {Link} from "react-router-dom"
import "../index.css"

function Recipe(props) {
    const {getRecipeDetails} = useContext(RecipeListContext)

    return (
        <div>
            <Link to={`/returned-recipes/${props.recipe.id}`} onClick={() => getRecipeDetails(props.recipe.id)}>Title: {props.recipe.title}</Link>
            <br />
            <img src={props.recipe.image} alt={props.recipe.tile} />
        </div>
    )
}

export default Recipe