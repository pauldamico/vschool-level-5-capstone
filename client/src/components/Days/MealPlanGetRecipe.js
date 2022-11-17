import axios from "axios"
export default function MealPlanGetRecipe (props) {
    console.log(props)



    return (
        <div>
     
       
       <div className="mealplan-list-div">
       <button onClick={props.showRecipeToggler}>Go Back</button>
       <h1>{props.recipeSummary}</h1>
            
        </div>
        </div>
    )
}