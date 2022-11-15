import { useContext } from "react";
import { RecipeListContext } from "../recipeListContext";
import {Link} from "react-router-dom"
import "../index.css"

function Recipe(props) {
    const {getRecipeDetails} = useContext(RecipeListContext)

    return (
        <div className = "col-sm-6 col-md-4 v my-2">
            <div className = "card shadow-sm w-100" style = {{ minHeight: 225 }}>
                <div className = "card-body">
                    <Link to={`/returned-recipes/${props.recipe.id}`} onClick={() => getRecipeDetails(props.recipe.id)}>Title: {props.recipe.title}</Link>
                    <br />
                    <img src={props.recipe.image} alt={props.recipe.tile} />
                </div>
            </div>
        </div>
    )
}

export default Recipe