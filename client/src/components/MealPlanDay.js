import React,{useState} from "react"
export default function MealPlanDay (props){
console.log(props.onClick)
    const [toggleEdit, setToggleEdit] = useState(false)

    function updateOnClick (){
        props.onClick(props.id)
    }
    return(
        <div>
            <button onClick={updateOnClick}>Edit</button>
            <div>
                <h1>BreakFast</h1>       
            <section>{props.breakfastTitle}</section>
            <h3>{props.breakfastRecipe}</h3>
            <p>{props.breakfastImg}</p>
            </div>
            <div>
            <h1>Lunch</h1>  
            <section>{props.lunchTitle}</section>
            <h3>{props.lunchRecipe}</h3>
            <p>{props.lunchImg}</p>
            </div>
            <div >
            <h1>Dinner</h1>  
            <section >{props.dinnerTitle}</section>
            <h3 >{props.dinnerRecipe}</h3>
            <p >{props.dinnerImg}</p>
            </div>

        </div>
    )
}