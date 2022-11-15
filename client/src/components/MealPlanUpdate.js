import React, {useState} from "react"



export default function  MealPlanUpdate (props) {
  

    const [updateUserMeal, setUpdateUserMeal] = useState({title:"", img:"", recipe:""})

    const updateUserMealInfo = () => {
        setUpdateUserMeal(prev=>({...prev, title:props.recipeTitle, img:props.recipeImg, recipe:props.recipeId}))

        
    }

    return(
        <div>
            <h1>{props.recipeTitle}</h1>
            <img src={props.recipeImg}/>
            <p>Recipe ID: {props.recipeId}</p>

        </div>
    )

}