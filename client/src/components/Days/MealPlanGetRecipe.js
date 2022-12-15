import axios from "axios"
import {nanoid} from "nanoid"
export default function MealPlanGetRecipe (props) {
 
const listSteps = props.currentRecipe.map(item=><div key={nanoid()}><h3>{item.number}</h3><p>{item.step}</p></div>)
    return (
        <div>
     
       
       <div className="mealplan-recipe-div">
       <button onClick={props.showRecipeToggler}>Go Back</button>
       <div className= "mealplan-recipe-div-center">
        <h1>{props.title}</h1>
       <div className="meal-plan-recipe-summary">{listSteps}</div>
       </div>
        </div>
        </div>
    )
}