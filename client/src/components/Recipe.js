import { useContext } from "react";
import { RecipeListContext } from "../recipeListContext";
import {Link} from "react-router-dom"
import "../index.css"

function Recipe(props) {
    const {getRecipeDetails} = useContext(RecipeListContext)

    return (
        <div className = "col-sm-6 col-md-4 v my-2">
            <div className = "card shadow-sm w-100" style = {{ minHeight: 350 }}>
                <div className = "card-body">
                    <Link to={`/returned-recipes/${props.recipe.id}`} onClick={() => getRecipeDetails(props.recipe.id)}>
                        <h1 className = "recipe-title">{props.recipe.title}</h1>
                    <br />
                    <img src={props.recipe.image} alt={props.recipe.tile} className = "results-img"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recipe