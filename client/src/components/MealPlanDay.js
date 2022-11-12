export default function MealPlanDay (props){
console.log(props)

    return(
        <div>
            <div>
            <h1>{props.breakfastTitle}</h1>
            <h3>{props.breakfastRecipe}</h3>
            <p>{props.breakfastImg}</p>
            </div>
            <div>
            <h1>{props.lunchTitle}</h1>
            <h3>{props.lunchRecipe}</h3>
            <p>{props.lunchImg}</p>
            </div>
            <div onClick={()=>{props.updateDinnerMeal("test")}}>
            <h1 >{props.dinnerTitle}</h1>
            <h3 >{props.dinnerRecipe}</h3>
            <p >{props.dinnerImg}</p>
            </div>

        </div>
    )
}